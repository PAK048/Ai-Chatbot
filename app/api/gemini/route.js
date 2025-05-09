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
      model: google("gemini-2.5-flash-preview-04-17"),
      messages: buildGoogleGenAIPrompt(messages),
      temperature: 0.7,
      stream: true,
    });

    return stream?.toDataStreamResponse();
  } catch (error) {
    console.error("Gemini API Error:", error);

    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

