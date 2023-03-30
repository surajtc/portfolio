import { NextResponse } from "next/server";
import getAllVotes from "@/lib/getAllVotes";

export async function GET() {
  const { blogs } = await getAllVotes();
  return NextResponse.json({ blogs });
}
