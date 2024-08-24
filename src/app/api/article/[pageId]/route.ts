import {fetchPageBlocks, fetchPagePropertyById, renderHTMLFromBlocks} from "@/lib/notion";
import { NextResponse } from "next/server";
import {parseNotionResponse} from "@/app/api/project/route";

export async function GET(
  request: Request,
  { params }: { params: { pageId: string } }
) {
  try {
    const pageId = params.pageId;
    const blocks = await fetchPageBlocks(pageId);
    const html = await renderHTMLFromBlocks(blocks);

    return NextResponse.json(html);
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
