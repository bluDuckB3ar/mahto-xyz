import { allPages } from "contentlayer/generated"
import React from "react"
import { Mdx } from "@/components/mdx/mdx-comp"
import { notFound } from "next/navigation"


async function getDocFromParams(slug: string) {
    const doc = allPages.find((doc) => doc.slugAsParams === slug)
    if (!doc)
        notFound()
    return doc

}

interface PageProps {
    params: {
        slug: string
    }
}

const page = async ({ params }: PageProps) => {
    const doc = await getDocFromParams(params.slug)
    doc.title
    doc.description


    return (
        <div>
            <h1>    doc.title     </h1>
            <Mdx code={doc.body.code} />

        </div>
    )
}


export default page 
