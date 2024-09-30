import React from 'react';
import { getContent } from '@/api/writings';
import NotionPage from '@/components/NotionPage';

export default async function Page({ params }: { params: { slug: string } }) {
    const content = await getContent(params.slug);

    console.log("data " + content);
    
    return (
        <>
            <NotionPage recordMap={content} />
        </>
    );
}
