import { NotionAPI } from 'notion-client'
import { Client } from '@notionhq/client';

export const notion = new NotionAPI({
  activeUser: process.env.NOTION_ACTIVE_USER,
  authToken: process.env.NOTION_TOKEN_V2
})

// Fetch Notion page or database
export const getDatabase = async () => {
  return await notion.getPage(process.env.NOTION_DATABASE_ID || '')
}

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

export const getData = async () => {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || '',
    sorts: [
    ],
  });
  // console.log("data ", response);
  return response;
};
export const getPageData = async (pageId: string) => {
  const response = await notionClient.blocks.children.list({
    block_id: pageId,
  });
  console.log("page blocks ", response);
  return response;
};