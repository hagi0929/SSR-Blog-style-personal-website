import {NotionItem, Tag} from "@/models/models";

export async function fetchProjects(): Promise<NotionItem[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project`, {
        // TODO fix the revalidate logic
        next: {revalidate: 60},
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();
    return data as NotionItem[];
}

export async function fetchProjectTagList(): Promise<Tag[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project/tags`);

    if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();
    return data as Tag[];
}
