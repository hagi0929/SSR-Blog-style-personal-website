import React from 'react';
import { ArticleModel } from '@/models/models';
import { getContent, getWritings } from '@/api/writings';
import NotionPage from '@/components/NotionPage';
import BackButton from '@/components/BackButton';

export const dynamicParams = false;

export async function generateStaticParams() {
    const articles: ArticleModel[] = await getWritings();

    // Return an array of params with slugs
    return articles.map(article => ({
        slug: article.slug,
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    const content = await getContent(params.slug);

    return (
        <>
            <div className="flex max-w-[720px] mx-auto">
                <BackButton />
            </div>
            <NotionPage recordMap={content} />
        </>
    );
}
