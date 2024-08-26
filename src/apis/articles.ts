import {
    ArticleModel,
    FullArticleModel,
    ProjectCategoryModel,
    ProjectModel,
    ProjectTechStackModel,
    TechStackModel
} from "@/models/models";

export async function getArticleById(articleId: string): Promise<FullArticleModel> {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`);
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

export async function getArticlesBySeriesId(seriesId: string): Promise<FullArticleModel> {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`);
    if (seriesId) {
        url.searchParams.append("seriesId", seriesId);
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

export async function getArticles(tagLabel: string | null = null,
                                  seriesLabel: string | null = null,
                                  page: number = 0,
):
    Promise<ArticleModel[]> {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`);
    if (tagLabel) {
        url.searchParams.append("tag", tagLabel);
    }
    if (seriesLabel) {
        url.searchParams.append("series", seriesLabel);
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
    return data as ArticleModel[];
}

export async function getArticleTagList(): Promise<ProjectCategoryModel[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/article/tags`);

    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ProjectCategoryModel[];
}

export async function getProjectSeriesList(): Promise<ProjectTechStackModel[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/article/series`);

    if (!response.ok) {
        throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    const data = await response.json();
    return data as ProjectTechStackModel[];
}