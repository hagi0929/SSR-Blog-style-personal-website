import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArticleTagModel, ProjectTechStackModel } from '@/models/models';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AllPostItemProps {
  title: string;
  description: string;
  date: Date;
  url: string;
  tags: ArticleTagModel[] | ProjectTechStackModel[];
}

const AllPostItem: React.FC<AllPostItemProps> = ({ title, description, date, url, tags }) => {
  return (
    <Link href={url}>
      <Card className="">
        <CardHeader>
          <CardDescription>
            Test
          </CardDescription>
          <CardTitle>{title}</CardTitle>
          <CardDescription>test one</CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <CardFooter className="justify-between">
          <CardDescription className="flex gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag.label}
                variant={"outline"}
              >
                {tag.label}
              </Badge>
            ))}
            <Badge
              variant={"outline"}
              className="text-xs py-0 leading-normal"
            >
              Javascript
            </Badge>
            <Badge
              variant={"outline"}
              className="text-xs py-0 leading-normal"
            >
              test2
            </Badge>
          </CardDescription>
          <CardDescription className="flex flex-row gap-1 justify-center items-center">
            Read More
            <ArrowRight className="h-4 w-4" />
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default AllPostItem