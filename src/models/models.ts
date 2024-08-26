import {ExtendedRecordMap} from "notion-types";
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


export interface ArticleTagModel {
    id: number;
    label: string;
    count?: number;
}

export interface ArticleSeriesModel {
    id: number;
    label: string;
    count?: number;
}

export interface FullArticleModel {
    id: string;
    title: string;
    blocks: any[];
    tags: ArticleTagModel[];
    createdAt: Date;
    series: ArticleSeriesModel | null;
}

export interface ArticleModel {
    id: string;
    title: string;
    previewText: string;
    tags: ArticleTagModel[];
    //datetime with time zone type
    createdAt: Date;
    series: ArticleSeriesModel | null;
}

export interface ProjectTechStackModel {
    id: number;
    label: string;
    count?: number;
}

export interface ProjectCategoryModel {
    id: number;
    label: string;
    count?: number;
}

export interface ProjectModel {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    isPrimary: boolean;
    hasSeries: boolean;
    links: LinkModel[];
    techStacks: ProjectTechStackModel[];
    categories: ProjectCategoryModel[];
}