import {getPropertiesByItemName} from "@/utils/api/supabase";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
  const requestUrl = req.nextUrl;
  const searchParam = requestUrl.searchParams;

  const itemName = searchParam.get('itemName');
  if (!itemName) {
    return NextResponse.json({
      status: 400,
      body: 'Missing required parameter: itemName'
    });
  }
  const propertyName = searchParam.get('propertyName') || null;
  const {data: properties, error} = await getPropertiesByItemName(itemName, propertyName);
  if (error) {
    return NextResponse.json({
      status: 400,
      body: 'Error while Fetching'
    });
  }
  return NextResponse.json(properties);
}