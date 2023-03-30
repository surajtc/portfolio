import downvoteBlog from "@/lib/downvoteBlog";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function POST(request: Request, context: { params: Params }) {
  const { votes }: { votes: number } = await request.json();
  const { id } = context.params;
  const { updateBlog } = await downvoteBlog(id, votes);

  return NextResponse.json({ ...updateBlog });
}
