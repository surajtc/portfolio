import voteBlog from "@/lib/voteBlog";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface Params {
  id: string;
}

export async function POST(request: Request, context: { params: Params }) {
  const { votes }: { votes: number } = await request.json();
  const { id } = context.params;
  const { updateBlog } = await voteBlog(id, votes);

  return NextResponse.json({ ...updateBlog });
}
