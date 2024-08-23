import {fetchProjectList} from "@/lib/notion";
import {projectListData} from "@/data/meta";


import {NotionItem, Link, Tag} from "@/models/project";

export function parseNotionResponse(data: any): NotionItem[] {
    return data.results.map((page: any) => {
        const tags: Tag[] = page.properties.Techstack.multi_select.map((tag: any) => ({
            type: tag.color,
            label: tag.name,
            id: tag.id,
        }));

        const links: Link[] = [];

        if (page.properties.Github?.url) {
            links.push({type: 'github', url: page.properties.Github.url});
        }

        if (page.properties.Website?.url) {
            links.push({type: 'website', url: page.properties.Website.url});
        }

        // Returning the mapped NotionItem
        return {
            id: page.id,
            notionId: page.id,
            title: page.properties.name.title[0]?.plain_text || '',
            description: page.properties.Description.rich_text[0]?.plain_text || '',
            links,
            tags,
        };
    });
}

export async function GET() {
    const data = await fetchProjectList();

    const s = parseNotionResponse(data);
    return s
}