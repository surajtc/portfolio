import { NextResponse } from "next/server";
import getVotes from "@/lib/getVotes";

interface Params {
  id: string;
}

export async function GET(_request: Request, context: { params: Params }) {
  const { id } = context.params;

  const { blog } = await getVotes(id);
  return NextResponse.json({ blog });
}
