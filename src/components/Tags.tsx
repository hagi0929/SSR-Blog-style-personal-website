"use client";

import {ArticleTagModel, PropertyModel} from '@/models/models';
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface TagsProps {
    tags: PropertyModel[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    const total = tags.reduce((acc, tag) => {
        return acc + (tag.count ?? 0);
    }, 0);

    const [activeTag, setActiveTag] = useState("All");

    const onClickTag = (tag: string) => {
        setActiveTag(tag);
    }

    return (
        <div className="hidden md:flex flex-row gap-2">
            <Badge
                key={"all"}
                variant={activeTag === "All" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => onClickTag("All")}
            >
                {total} All
            </Badge>
            {tags.map(({ id, label, count }) => (
                <Badge
                    key={id}
                    variant={activeTag === label ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => onClickTag(label)}
                >
                    {count ?? 0} {label}
                </Badge>
            ))}
        </div>
    );
}

export default Tags;