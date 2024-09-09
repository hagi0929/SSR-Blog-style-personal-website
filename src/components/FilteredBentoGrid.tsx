"use client";

import React, { useState } from 'react';
import Tags from "@/components/Tags";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArticleModel, ArticleTagModel, ProjectModel, ProjectTechStackModel } from "@/models/models";

export enum BentoGridTemplateType {
    projects,
    writings,
}

interface FilteredBentoGridProps {
    type: BentoGridTemplateType;
    tags: ArticleTagModel[] | ProjectTechStackModel[];
    articles: ArticleModel[] | ProjectModel[];
}

const FilteredBentoGrid: React.FC<FilteredBentoGridProps> = ({ type, tags, articles }) => {
    const [activeTag, setActiveTag] = useState("All");

    const filteredPosts = activeTag === "All"
        ? articles
        : type === BentoGridTemplateType.projects
            ? (articles as ProjectModel[]).filter(project =>
                project.techStacks.some(stack => stack.label === activeTag)
            )
            : (articles as ArticleModel[]).filter(article =>
                article.tags.some(tag => tag.label === activeTag)
            );

    return (
        <div className="flex flex-col gap-4">
            <Tags tags={tags} activeTag={activeTag} onClickTag={(tag) => setActiveTag(tag)} />
            <BentoGrid>
                {filteredPosts.map((post) => {
                    const isProject = type === BentoGridTemplateType.projects;
                    const { id, title, slug } = post;
                    const description = isProject
                        ? (post as ProjectModel).description
                        : (post as ArticleModel).previewText;
                    const tags = isProject
                        ? (post as ProjectModel).techStacks
                        : (post as ArticleModel).tags;

                    const url = isProject
                        ? ("/projects/post/" + slug)
                        : ("/writings/post/" + slug);

                    const thumbnail = isProject ? (post as ProjectModel).thumbnail : null;

                    return (
                        <BentoGridItem
                            key={id}
                            title={title}
                            description={description}
                            href={url}
                            tags={tags}
                            icon={isProject ? thumbnail : null}
                        />
                    );
                })}
            </BentoGrid>
        </div>
    );
};

export default FilteredBentoGrid;
