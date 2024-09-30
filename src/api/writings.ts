import {
    ArticleModel,
    FullArticleModel,
    ProjectCategoryModel,
    ProjectTechStackModel,
} from "@/models/models";
import {getArticleContentFromSlug, getItemsByItemName, getPropertiesByItemName} from "@/utils/api/supabase";
import {ExtendedRecordMap} from "notion-types";

export async function getArticleById(articleId: string): Promise<FullArticleModel> {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/item`);
    if (articleId) {
        url.searchParams.append("id", articleId);
    }
    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();
    return data as FullArticleModel;
}

export const getContent = async (slug: string) : Promise<ExtendedRecordMap> => {
    let { data, error } = await getArticleContentFromSlug("Writing", slug);
    if (error) {
        // TODO: Handle error
        throw new Error("Error while fetching : " + error + " data: " + data);
    }
    
    if (!data) {
        throw new Error("No data found for slug: " + slug);
    }

    return JSON.parse(data.content) as ExtendedRecordMap;
};

export async function getWritings(catergorySlug: string | null = null): Promise<ArticleModel[]> {
    let { data: items, error } = await getItemsByItemName("Writing");
    if (error) {
        // TODO: Handle error
        throw new Error("Error while fetching : " + error + " data: " + items);
    }
    // console.log(items);

    if (catergorySlug) {
        items = items.filter((item) => item.properties?.some((property) => property.slug === catergorySlug));
    }

    const parsedItems = items?.map((item) => {
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
    // console.log(parsedItems);

    return parsedItems as ArticleModel[];
}

export async function getWritingTagList(): Promise<ProjectCategoryModel[]> {
    const { data, error } = await getPropertiesByItemName("Writing", "Tag");

    if (error) {
        throw new Error(`Failed to fetch tags: ${error.message}`);
    }

    return data as ProjectCategoryModel[];
}

export async function getWritingSeriesList(): Promise<ProjectTechStackModel[]> {
    const { data, error } = await getPropertiesByItemName("Writing", "Tag");

    if (error) {
        throw new Error(`Failed to fetch series: ${error.message}`);
    }

    return data as ProjectCategoryModel[];
}

