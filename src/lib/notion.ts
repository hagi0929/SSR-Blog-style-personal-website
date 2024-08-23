import "server-only";

import {Client} from "@notionhq/client";
import React from "react";
import {
    BlockObjectResponse,
    PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export const fetchProjectList = React.cache(() => {
    return notion.databases.query({
        database_id: process.env.NOTION_PROJECT_DB!,
    });
});

export const fetchBlogLists = React.cache(() => {
    return notion.databases.query({
        database_id: process.env.NOTION_BLOG_DB!,
    });
});


export const fetchArticleById = React.cache(async (id: string) => {
    const res = await notion.databases
        .query({
            database_id: process.env.NOTION_PROJECT_DB!,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: id,
                },
            },
        });
    return res.results[0] as PageObjectResponse | undefined;
});

export const fetchPageBlocks = React.cache(async (pageId: string) => {
    const res = await notion.blocks.children
        .list({block_id: pageId});
    return res.results as BlockObjectResponse[];
});

