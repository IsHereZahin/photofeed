import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

// get all photos
export async function GET() {
    const data = await getAllPhotos();
    return NextResponse.json(data);
}

