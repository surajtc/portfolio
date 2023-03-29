import { NextResponse } from "next/server";
import likeBlog from "@/lib/likeBlog";

interface Params {
  slug: string;
}

export async function POST(request: Request, context: { params: Params }) {
  const { likes }: { likes: number } = await request.json();
  const { slug } = context.params;
  const { updateBlog } = await likeBlog(slug, likes);

  return NextResponse.json({ ...updateBlog });
}
