import { NotionAPI } from 'notion-client'
import { CollectionInstance } from 'notion-types'

export const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER,
    authToken: process.env.NOTION_TOKEN_V2
})

// Fetch Notion page or database
export const getDatabase = async () => {
    return await notion.getPage(process.env.NOTION_DATABASE_ID || '')
}
import { Client } from '@notionhq/client';

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

export const getData = async () => {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || '',
    sorts: [
    ],
  });
  console.log("data ", response);
  return response;
};
export const getPageData = async (pageId) => {
    const response = await notionClient.blocks.children.list({
        block_id: pageId,
      });
  console.log("page blocks ",response);
  return response;
};