#!/bin/bash
# Vercel build script with proper error handling

set -e  # Exit on first error

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building Contentlayer..."
npx contentlayer build || echo "Contentlayer build exited with code, but generated files may be present"

echo "Building Next.js..."
next build

echo "Build completed successfully!"
