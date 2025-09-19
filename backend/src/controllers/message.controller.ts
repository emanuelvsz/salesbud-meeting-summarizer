import { Request, Response } from "express";
import { generateSummary } from "../services/llm.service";

export async function sendMessage(req: Request, res: Response) {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: "Mensagem não enviada" });

  try {
    const summary = await generateSummary(message);
    res.json({ message: summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Falha ao gerar resposta" });
  }
}
