import { NextResponse } from "next/server";
import likeBlog from "@/lib/likeBlog";

interface Params {
  slug: string;
}

export async function POST(request: Request, context: { params: Params }) {
  const { likes, offset }: { likes: number; offset: 1 | -1 } =
    await request.json();
  const { slug } = context.params;
  const { updateBlog } = await likeBlog(slug, likes, offset);

  return NextResponse.json({ ...updateBlog });
}
