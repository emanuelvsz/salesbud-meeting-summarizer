import OpenAI from "openai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const contextFilePath = path.join(__dirname, "../context/context.txt");
let llmContext = "";

try {
  llmContext = fs.readFileSync(contextFilePath, "utf-8");
  console.log("Contexto do LLM carregado com sucesso.");
} catch (err) {
  console.error("Falha ao carregar o contexto do LLM:", err);
}

export async function generateSummary(message: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: llmContext },
      { role: "user", content: message },
    ],
    temperature: 0,
    max_tokens: 500,
  });

  return completion.choices[0].message?.content || "";
}
