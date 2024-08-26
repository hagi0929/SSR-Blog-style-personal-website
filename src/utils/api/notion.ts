import "server-only";

import {Client} from "@notionhq/client";
import React from "react";
import {
    BlockObjectResponse,
    PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import {ExtendedRecordMap} from "notion-types";
import {NotionRenderer} from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import {NotionAPI} from "notion-client";

const client = new Client({
    auth: process.env.NOTION_API_KEY,
});

const renderer = new NotionRenderer({ client });

export const notion = {
  client: client,
  renderer: renderer,
};


export const fetchProjectList = React.cache(() => {
    return notion.client.databases.query({
        database_id: process.env.NOTION_PROJECT_DB!,
    });
});

export const retrieveProjectDB = React.cache(() => {
    return notion.client.databases.retrieve({
        database_id: process.env.NOTION_PROJECT_DB!,
    });
});


export const fetchBlogLists = React.cache(() => {
    return notion.client.databases.query({
        database_id: process.env.NOTION_BLOG_DB!,
    });
});


export const fetchPagePropertyById = React.cache(async (pageId: string) => {
    const res = await notion.client.pages.retrieve({ page_id: pageId })

    return res as PageObjectResponse | undefined;
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.client.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const renderHTMLFromBlocks = async (blocks: BlockObjectResponse[]) => {
  return await notion.renderer.render(...blocks);
}

