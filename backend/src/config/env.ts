import dotenv from "dotenv";

export function configEnv() {
  dotenv.config();

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY não definida no .env");
  }
  if (!process.env.FRONTEND_URL) {
    throw new Error("FRONTEND_URL não definida no .env");
  }
}
