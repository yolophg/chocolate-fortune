import { NextResponse } from "next/server";
import { chocolates } from "@/data/chocolates";

export function GET() {
  return Promise.resolve(NextResponse.json(chocolates));
}
