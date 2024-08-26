import { fetchProjectList } from "@/utils/api/notion";
import { NotionItem, Link, Tag } from "@/models/models";
import { NextResponse } from "next/server"; // Ensure you import NextResponse

export function parseNotionResponse(data: any): NotionItem[] {
    return data.results.map((page: any) => {
        const tags: Tag[] = page.properties.Techstack.multi_select.map((tag: any) => ({
            type: tag.color,
            label: tag.name,
            id: tag.id,
        }));

        const links: Link[] = [];

        if (page.properties.Github?.url) {
            links.push({ type: 'github', url: page.properties.Github.url });
        }

        if (page.properties.Website?.url) {
            links.push({ type: 'website', url: page.properties.Website.url });
        }

        return {
            id: page.id,
            notionId: page.id,
            title: page.properties.title.title[0]?.plain_text || '',
            description: page.properties.Description.rich_text[0]?.plain_text || '',
            links,
            tags,
        };
    });
}

export async function GET() {
    try {
        const data = await fetchProjectList();
        const parsedData = parseNotionResponse(data);

        return NextResponse.json(parsedData);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.error();
    }
}
