"use client";

import { ArticleTagModel } from '@/models/models';
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface TagsProps {
    tags: ArticleTagModel[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    const total = tags.reduce((acc, tag) => {
        return acc + (tag.count ?? 0);
    }, 0);

    return (
        <div className="hidden md:flex flex-row gap-2">
            <Badge variant="outline">
                {total} All
            </Badge>
            {tags.map(({ id, label, count }) => (
                <Badge key={id} variant="outline">
                    {count ?? 0} {label}
                </Badge>
            ))}
        </div>
    );
}

export default Tags;