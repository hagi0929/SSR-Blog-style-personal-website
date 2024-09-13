import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const headers = req.headers;
    
    const origin = headers.get('origin');

    if (!origin || origin !== process.env.ALLOWED_ORIGIN) {
        return NextResponse.json({
            status: 400,
            body: 'Error: Invalid request origin'
        });
    }

    revalidatePath('/projects');

    return NextResponse.json({
        status: 200,
        body: 'success'
    });
}
