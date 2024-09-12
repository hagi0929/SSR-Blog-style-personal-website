import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const requestUrl = req.nextUrl;
    const searchParam = requestUrl.searchParams;

    const propertyName = searchParam.get('propertyName') || null;
    if (requestUrl != process.env.NODE_ENV) {
        return NextResponse.json({
            status: 400,
            body: 'Error while Fetching'
        });
    }

    revalidatePath('/projects');

    return NextResponse.json({
        status: 200,
        body: 'success'
    });
}