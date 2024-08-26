import {fetchPageBlocks, renderHTMLFromBlocks, retrieveProjectDB} from "@/utils/api/notion";
import {NextResponse} from "next/server";

export const TAG_CATEGORIES = [
    "Techstack",
];

export async function GET(
) {
  try {
    return NextResponse.json("tags");
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
