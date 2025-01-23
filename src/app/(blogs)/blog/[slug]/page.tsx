import { Mdx } from "@/components/mdx/mdx-comp";
import { allPages } from "contentlayer/generated"
import { notFound } from "next/navigation"

// Create a map for faster lookups
const pagesMap = new Map(allPages.map(page => [page.slugAsParams, page]));

/**
 * Retrieves a document based on the provided slug.
 * @param {string} slug - The slug of the document to retrieve.
 * @returns {Promise<object>} The document object if found, otherwise calls notFound.
 */
async function getDocFromParams(slug: string) {
    const doc = pagesMap.get(slug);
    if (!doc) return notFound();
    return doc;
}

interface PageProps {
    params: {
        slug: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const doc = await getDocFromParams(params.slug);

    return (
        <div>
            <h1>{doc.title}</h1>
            <Mdx code={doc.body.code} />
            <h1>{doc.title}</h1>
        </div>
    );
};

export default Page;
