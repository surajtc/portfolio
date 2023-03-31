import { getAllVotes } from "@/lib/getAllVotes";
import { NextResponse } from "next/server";

export async function GET() {
  const { blogs } = await getAllVotes();
  return NextResponse.json({ blogs });
}
