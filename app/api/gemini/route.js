import { initialMessage } from "@/lib/data";
//import OpenAI from "openai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

export const runtime = "edge";

const generateId = () => Math.random().toString(36).substring(2, 15);

const buildGoogleGenAIPrompt = (messages) => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request) {
  try {
    const { messages } = await request.json();

    const stream = await streamText({
      model: google("gemini-1.0-pro"), // Ensure correct model name
      messages: buildGoogleGenAIPrompt(messages),
      temperature: 0.7,
      stream: true,
    });
    return stream?.toDataStreamResponse();

    //   return new NextResponse(response.body, { status: 200 });
    // } catch (error) {
    //   console.error("Gemini API Error:", error);
    //   return new NextResponse(JSON.stringify({ error: error.message }), {
    //     status: 500,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // }
  } catch (error) {
    console.error("Gemini API Error:", error);
  }
}
