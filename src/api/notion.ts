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