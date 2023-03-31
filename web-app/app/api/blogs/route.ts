import { getBlogs } from "@/lib/getBlogs";
import { NextResponse } from "next/server";

export async function GET() {
  const { blogs } = await getBlogs();
  return NextResponse.json({ blogs });
}
