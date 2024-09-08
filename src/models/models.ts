import { ExtendedRecordMap } from "notion-types";
import * as url from "node:url";

enum LinkType {
    Github,
    LiveDemo,
    Article,
    Website,
    Other
}

export interface LinkModel {
    type: LinkType;
    url: URL;
}

export interface PropertyModel {
    id: string;
    label: string;
    slug: string;
}

export interface ArticleTagModel extends PropertyModel {
    count?: number;

}

export interface ArticleSeriesModel extends PropertyModel {
}

export interface ProjectTechStackModel extends PropertyModel {
    count?: number;
}

export interface ProjectCategoryModel extends PropertyModel {
    count?: number;
}

export interface FullArticleModel {
    id: string;
    slug: string;
    title: string;
    blocks: any[];
    tags: ArticleTagModel[];
    createdAt: Date;
    series: ArticleSeriesModel | null;
}

export interface ArticleModel {
    id: string;
    slug: string;
    title: string;
    previewText: string;
    tags: ArticleTagModel[];
    //datetime with time zone type
    createdAt: Date;
    series: ArticleSeriesModel | null;
}


export interface ProjectModel {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    links: LinkModel[];
    techStacks: ProjectTechStackModel[];
    categories: ProjectCategoryModel[];
}