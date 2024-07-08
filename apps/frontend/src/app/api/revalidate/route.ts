import { NextRequest, NextResponse } from "next/server";

import { REVALIDATE_KEY } from "@lib/constants";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const revalidateKey = request.nextUrl.searchParams.get("revalidateKey");

  if (!revalidateKey) {
    return NextResponse.json({ error: "Missing revalidate key" }, { status: 400 });
  }

  if (revalidateKey !== REVALIDATE_KEY) {
    return NextResponse.json({ error: "Wrong revalidate key" }, { status: 400 });
  }

  console.log("Revalidating...");
  revalidatePath("/");

  return NextResponse.json({
    statusText: "Revalidated",
  });
}
