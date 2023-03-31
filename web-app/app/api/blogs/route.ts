import { NextResponse } from "next/server";
import getBlogs from "@/lib/getBlogs";

export const dynamic = "force-dynamic";

export async function GET() {
  const { blogs } = await getBlogs();
  return NextResponse.json({ blogs });
}
