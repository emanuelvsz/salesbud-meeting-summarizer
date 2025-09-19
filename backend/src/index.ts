import express from "express";
import cors from "cors";
import messageRoutes from "./routes/message.routes";
import { configEnv } from "./config/env";
import dotenv from "dotenv";
dotenv.config();

configEnv();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Backend rodando..."));
app.use("/send", messageRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
