"use client"; // This file is explicitly client-side

import React, { useState } from 'react';
import Tags from "@/components/Tags";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArticleModel, ArticleTagModel } from "@/models/models";

const ItemList: React.FC = ({ tags, articles }) => {
    const [activeTag, setActiveTag] = useState("All");

    const filteredArticles = activeTag === "All"
        ? articles
        : articles.filter(article => article.tags.some(tag => tag.label === activeTag));

    return (
        <div className="flex flex-col gap-4">
            <Tags tags={tags} activeTag={activeTag} onClickTag={(tag) => setActiveTag(tag)} />
            <BentoGrid>
                {filteredArticles.map(({ id, title, previewText, category, tags }) => {
                    const url = "/" + category + "/" + id;
                    return (
                        <BentoGridItem
                            key={id}
                            title={title}
                            description={previewText}
                            href={url}
                            tags={tags}
                        />
                    );
                })}
            </BentoGrid>
        </div>
    );
};

export default ItemList;
