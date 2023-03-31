import { getAllVotes } from "@/lib/getAllVotes";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const { blogs } = await getAllVotes();
  return NextResponse.json({ blogs });
}
