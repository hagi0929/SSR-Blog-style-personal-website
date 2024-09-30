export interface SupabaseArticle {
    databaseId: string;
    notionId: string;
    itemName: string;
    label: string;
    metadata: Object;
    createdTime: Date;
    slug: string;
    content: string;
    property: Object[];
}