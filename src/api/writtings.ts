import {
    ArticleModel,
    FullArticleModel,
    ProjectCategoryModel,
    ProjectModel,
    ProjectTechStackModel,
} from "@/models/models";
import { getItemsByItemName } from "@/utils/api/supabase";
import { NextURL } from "next/dist/server/web/next-url";

export async function getArticleById(articleId: string): Promise<FullArticleModel> {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/item`);
    if (articleId) {
        url.searchParams.append("id", articleId);
    }
    const response = await fetch(url.toString());

    if (!
        response.ok
    ) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();
    return data as FullArticleModel;
}

export async function getWritings(catergorySlug: string | null = null): Promise<ArticleModel[]> {
    let { data: items, error } = await getItemsByItemName("Writing");
    if (error) {
        // TODO: Handle error
        throw new Error("Error while fetching");
    }
    // console.log(items);

    if (catergorySlug) {
        items = items.filter((item) => item.properties?.some((property) => property.slug === catergorySlug));
    }
    const parsedItems = items.map((item) => {
        return {
            id: item.notionId,
            slug: item.slug,
            title: item.label,
            previewText: item.metadata?.description || "",
            createdAt: item.metadata?.createdDate || "",
            tags: item.properties?.filter((property) => property.name === "Tag") || [],
            series: item.properties?.filter((property) => property.name === "Series") || [],
        } as ArticleModel;
    })
    console.log(parsedItems);

    return parsedItems as ArticleModel[];
}

// export async function getArticles(tagLabel: string | null = null,
//     seriesLabel: string | null = null,
//     page: number = 0,
// ):
//     Promise<ArticleModel[]> {
//     const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`);
//     if (tagLabel) {
//         url.searchParams.append("tag", tagLabel);
//     }
//     if (seriesLabel) {
//         url.searchParams.append("series", seriesLabel);
//     }
//     if (page > 0) {
//         url.searchParams.append("page", page.toString());
//     }
//     const response = await fetch(url.toString());

//     if (!
//         response.ok
//     ) {
//         throw new Error(`Failed to fetch projects: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data as ArticleModel[];
// }

export async function getWritingTagList(): Promise<ProjectCategoryModel[]> {
    const url = new NextURL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/property`);
    url.searchParams.append("itemName", "Writing");
    url.searchParams.append("propertyName", "Tag");

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ProjectCategoryModel[];
}

export async function getWritingSeriesList(): Promise<ProjectTechStackModel[]> {
    const url = new NextURL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/property`);
    url.searchParams.append("itemName", "Writing");
    url.searchParams.append("propertyName", "Series");

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch series: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ProjectCategoryModel[];
}

