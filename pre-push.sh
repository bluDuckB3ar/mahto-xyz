#!/bin/bash
# Pre-push verification and commit script for mahto-xyz

echo "🚀 mahto-xyz Pre-Push Verification"
echo "===================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Verify build
echo "📦 Step 1: Verifying build..."
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build successful${NC}"
echo ""

# Step 2: Check lint
echo "🔍 Step 2: Running lint checks..."
npm run lint || true
echo ""

# Step 3: Check git status
echo "📝 Step 3: Checking git status..."
git status --short
echo ""

# Step 4: Check for console logs
echo "🐛 Step 4: Checking for console logs..."
if grep -r "console\.\(log\|warn\|error\|debug\)" src --include="*.ts" --include="*.tsx" 2>/dev/null | grep -v "node_modules"; then
    echo -e "${YELLOW}⚠️  Found console statements${NC}"
else
    echo -e "${GREEN}✓ No console statements found${NC}"
fi
echo ""

# Step 5: Review files to commit
echo "📋 Step 5: Files to be committed:"
echo ""
echo "Modified:"
git diff --cached --name-only | grep -v "^.contentlayer/" | grep -v "^.next/" || echo "  (none)"
echo ""
echo "New files:"
git ls-files --others --exclude-standard | head -10
echo ""

# Step 6: Confirmation
echo "🔐 Ready to push?"
echo "Usage: git add . && git commit -m 'feat: add interests page...'"
echo ""
echo "Then: git push origin main"
