import React from 'react';
import { ArticleModel, ProjectModel } from '@/models/models';
import NotionPage from '@/components/NotionPage';
import BackButton from '@/components/BackButton';
import { getProjects, getProjectContent } from '@/api/projects';

export const dynamicParams = false;

export async function generateStaticParams() {
    const projects: ProjectModel[] = await getProjects();

    // Return an array of params with slugs
    return projects.map(project => ({
        slug: project.slug,
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    const content = await getProjectContent(params.slug);

    return (
        <>
            <div className="flex max-w-[720px] mx-auto">
                <BackButton />
            </div>
            <NotionPage recordMap={content} />
        </>
    );
}
