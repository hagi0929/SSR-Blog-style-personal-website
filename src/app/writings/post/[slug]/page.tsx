import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { getContent } from '@/api/writings';
import {NotionPage} from "@/components/NotionPage";

export default async function Page({ params }: { params: { slug: string } }) {
    const content = await getContent(params.slug);

    return (
        <div>
            content
        </div>
    );
}
