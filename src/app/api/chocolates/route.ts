import { NextResponse } from "next/server";
import { chocolates } from "@/data/chocolates";

export async function GET() {
  try {
    return NextResponse.json({ chocolates });
  } catch (err) {
    console.error("초콜릿 데이터 로딩 에러:", err);
    return NextResponse.json(
      { error: "초콜릿 데이터를 불러오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
