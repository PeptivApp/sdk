import { Router } from "express";
import { getProtocols } from "../controllers/protocol.controller.js";

const router = Router();
router.get("/", getProtocols);

export default router;
