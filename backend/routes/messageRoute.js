import express from "express";
import { sendMessage, getMessages } from "../controllers/messageCntr.js";
import { protect } from "../middleware/protect.js";

const messageRoute = express.Router();


messageRoute.post("/sent/:id", protect, sendMessage);
messageRoute.get("/:id", protect, getMessages);

export default messageRoute;