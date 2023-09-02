/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import express, { Request, Response } from "express";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Identity Provider Service is up and running!");
});
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export default router;
