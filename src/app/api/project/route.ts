import { fetchProjectList } from "@/lib/notion";
import { projectListData } from "@/data/meta";

export async function GET() {
    const data = await fetchProjectList();


    return Response.json({ data })
}