import React from 'react';
import { getContent } from '@/api/writings';
import NotionPage from '@/components/NotionPage';

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getContent(params.slug);
    const content = JSON.parse(data[0].content);

    console.log("data " + data);
    
    return (
        <>
            <NotionPage recordMap={content} />
        </>
    );
}
