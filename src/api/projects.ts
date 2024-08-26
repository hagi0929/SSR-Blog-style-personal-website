import {ProjectCategoryModel, ProjectModel, ProjectTechStackModel} from "@/models/models";

export async function getProjects(categoryLabel: string | null = null,
                                  techStackLabel: string | null = null,
                                  page: number = 0,
):
    Promise<ProjectModel[]> {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project`);
    if (categoryLabel) {
        url.searchParams.append("category", categoryLabel);
    }
    if (techStackLabel) {
        url.searchParams.append("techStack", techStackLabel);
    }
    if (page > 0) {
        url.searchParams.append("page", page.toString());
    }
    const response = await fetch(url.toString());

    if (!
        response.ok
    ) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ProjectModel[];
}

export async function getProjectCategoryList(): Promise<ProjectCategoryModel[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project/categories`);

    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ProjectCategoryModel[];
}

export async function getProjectTechStackList(): Promise<ProjectTechStackModel[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project/techStacks`);

    if (!response.ok) {
        throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ProjectTechStackModel[];
}