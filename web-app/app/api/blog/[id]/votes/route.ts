import { getVotes } from "@/lib/getVotes";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}

export const fetchCache = "default-no-store";

export async function GET(_request: Request, context: { params: Params }) {
  const { id } = context.params;

  const { blog } = await getVotes(id);
  return NextResponse.json({ blog });
}
