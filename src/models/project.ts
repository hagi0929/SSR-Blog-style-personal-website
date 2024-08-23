export interface Link {
    type: string;
    url: string;
}

export interface Tag {
    type: string;
    label: string;
    id: string;
}

export interface NotionItem {
    id: number;
    notionId: string;
    title: string;
    description: string;
    links: Link[];
    tags: Tag[];
}
