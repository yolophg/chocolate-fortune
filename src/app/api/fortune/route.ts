import { NextResponse } from "next/server";
import genAI from "@/utils/gemini";
import { chocolates } from "@/data/chocolates";

interface FortuneRequest {
  chocolateId: string;
  lang: "ko" | "en";
}

export async function POST(request: Request) {
  let lang: "ko" | "en" = "ko";

  try {
    const body = (await request.json()) as FortuneRequest;
    const { chocolateId, lang: requestLang } = body;
    lang = requestLang;

    console.log('Request received:', { chocolateId, lang });

    const chocolate = chocolates.find((c) => c.id === chocolateId);
    if (!chocolate) {
      console.log('Chocolate not found:', chocolateId);
      throw new Error("Chocolate not found");
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-8b"
    });
    console.log('Gemini model initialized');

    console.log('Generating prompt for:', { 
      chocolateName: chocolate.name[lang],
      chocolateDesc: chocolate.description[lang] 
    });

    const prompt =
      lang === "ko"
        ? `다음 초콜릿의 특징을 바탕으로 오늘의 일상 운세 메시지를 작성해주세요:
         초콜릿: "${chocolate.name.ko}"
         특징: "${chocolate.description.ko}"
         
         요구사항:
         - 100자 내외의 짧은 메시지
         - 일상생활과 업무/학업 관련
         - 초콜릿의 특징을 하루의 분위기나 상황에 비유
         - 직장인과 학생 모두에게 적용 가능한 조언
         - 긍정적이고 따뜻한 톤 유지`
        : `Based on the characteristics of this chocolate, create a daily fortune message:
         Chocolate: "${chocolate.name.en}"
         Characteristics: "${chocolate.description.en}"
         
         Requirements:
         - Short message around 100 characters
         - Related to daily life and work/study
         - Compare chocolate characteristics to the day's mood
         - Advice for both professionals and students
         - Maintain a positive tone`;

    const result = await model.generateContent(prompt);
    const fortune = result.response.text();

    return NextResponse.json({ fortune, chocolate });
  } catch (error) {
    console.error("Fortune generation failed:", {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      {
        error:
          lang === "ko"
            ? "운세 생성 중 오류가 발생했습니다."
            : "Failed to generate fortune.",
      },
      { status: 500 }
    );
  }
}
