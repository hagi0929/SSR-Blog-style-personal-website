import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ArticleTagModel, ProjectTechStackModel } from '@/models/models';

interface AllPostItemProps {
    title: string;
    description: string;
    date: Date;
    url: string;
    tags: ArticleTagModel[] | ProjectTechStackModel[];
}

const AllPostItem: React.FC<AllPostItemProps> = ({ title, description, date, url, tags }) => {
  return (
    <Card>
        <CardHeader>
            <CardDescription></CardDescription>
            <CardTitle></CardTitle>
        </CardHeader>
    </Card>
  )
}

export default AllPostItem