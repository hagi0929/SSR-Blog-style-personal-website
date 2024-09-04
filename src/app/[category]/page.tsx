import React from 'react';
import { exampleArticles, exampleTags } from '@/data/newMockData';
import Heading from "@/components/Heading";
import ItemList from "@/components/ItemList";

export function generateStaticParams() {
    const categories = [
        "programming",
        "personal",
        "blog",
    ];

    return categories.map((category) => ({
        category: category,
    }));
}

const Page = ({ params }: { params: { category: string } }) => {
    const categoryData = {
        programming: {
            subheading: "Explore the world of coding and technology",
            tags: exampleTags.filter(tag => tag.category === "programming"),
            articles: exampleArticles.filter(article => article.category === "programming"),
        },
        personal: {
            subheading: "Insights from my personal experiences and growth",
            tags: exampleTags.filter(tag => tag.category === "personal"),
            articles: exampleArticles.filter(article => article.category === "personal"),
        },
        blog: {
            subheading: "Thoughts, stories, and ideas",
            tags: exampleTags.filter(tag => tag.category === "blog"),
            articles: exampleArticles.filter(article => article.category === "blog"),
        },
    }[params.category];

    if (!categoryData) {
        return <div>Category not found</div>;
    }

    const { subheading, tags, articles } = categoryData;

    return (
        <div className="w-full flex flex-col min-h-screen gap-8">
            <Heading
                heading={params.category.charAt(0).toUpperCase() + params.category.slice(1)}
                subheading={subheading}
            />
            <div className="flex flex-col px-2 gap-4">
                <ItemList tags={tags} articles={articles} />
            </div>
        </div>
    );
};

export default Page;
