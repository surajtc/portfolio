import { NextResponse } from "next/server";
import getVotes from "@/lib/getVotes";
import postVotes from "@/lib/postVotes";

interface Params {
  id: string;
}

export async function GET(_request: Request, context: { params: Params }) {
  const { id } = context.params;

  const { blog } = await getVotes(id);

  return NextResponse.json({ blog });
}

export async function POST(request: Request, context: { params: Params }) {
  const { votes }: { votes: number } = await request.json();
  const { id } = context.params;

  const { updateBlog } = await postVotes(id, votes);

  return NextResponse.json({ ...updateBlog });
}

export const dynamic = "force-dynamic";
