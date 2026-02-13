import { Router } from "express";
import protocolRoutes from "./protocol.routes.js";

const router = Router();
router.use("/protocols", protocolRoutes);

export default router;
