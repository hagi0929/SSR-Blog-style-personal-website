import {fetchPageBlocks, renderHTMLFromBlocks, retrieveProjectDB} from "@/lib/notion";
import {NextResponse} from "next/server";
import {Tag} from "@/models/project";

export const TAG_CATEGORIES = [
    "Techstack",
];

export function parseTags(data: any): Tag[] {
    const tags: Tag[] = [];

    for (const propertyName in data.properties) {
        const property = data.properties[propertyName];

        if (TAG_CATEGORIES.includes(propertyName) && property.type === 'multi_select' && Array.isArray(property.multi_select?.options)) {
            property.multi_select.options.forEach((option: any) => {
                tags.push({
                    type: propertyName,
                    label: option.name || '',
                    id: option.id || ''
                });
            });
        }
    }

    return tags;
}


export async function GET(
) {
  try {
    const response = await retrieveProjectDB();
    const tags = parseTags(response);
    return NextResponse.json(tags);
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
