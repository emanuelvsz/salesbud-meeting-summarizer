import { Router } from "express";
import { sendMessage } from "../controllers/message.controller";

const router = Router();

router.post("/", sendMessage);

export default router;
