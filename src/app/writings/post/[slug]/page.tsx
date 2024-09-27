import React from 'react';
import { getContent } from '@/api/writings';
import NotionPage from '@/components/NotionPage';

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getContent(params.slug);
    const content = data[0].content;
    console.log(content);
    return (
        <>
            <NotionPage recordMap={content} />
        </>
    );
}
