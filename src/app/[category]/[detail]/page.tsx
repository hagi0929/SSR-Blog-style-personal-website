import { exampleArticles } from '@/data/newMockData';
import React from 'react';

// This function generates static params for each category page
export function generateStaticParams() {
    // Get all unique categories from the articles
    const categories = [...new Set(exampleArticles.map(article => article.category))];
    const articleID = [
        "1",
        "2",
        "3",
        "4",
        "5",
    ];

    // Generate params for each article within each category
    return categories.map((category) => {
        const articles = exampleArticles.filter(article => article.category === category);
        return articles.map((article) => ({
            params: {
                category: category,
                detail: article.id,
            },
        }));
    }).flat();
}

const Page = ({
    params,
}: {
    params: { category: string; detail: string }
}) => {
    const article = exampleArticles.find(
        art => art.category === params.category && art.id === params.detail
    );

    if (!article) {
        return <div className="w-full flex flex-col min-h-screen pt-16">Article not found</div>;
    }

    return (
        <div className="w-full flex flex-col min-h-screen pt-16">
            <h1>{article.title}</h1>
            <p>{article.previewText}</p>
            <p><strong>Category:</strong> {article.category}</p>
            <p><strong>Created At:</strong> {article.createdAt.toLocaleString()}</p>
            {/* Additional article details can go here */}
        </div>
    );
};

export default Page;
