import { NextResponse } from "next/server";
import getBlog from "@/lib/getBlog";

type Params = {
  slug: string;
};

export async function GET(_request: Request, context: { params: Params }) {
  const { slug } = context.params;

  const { blog } = await getBlog(slug);

  return NextResponse.json({ ...blog });
}
