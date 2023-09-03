/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import express from "express";
import authControllers from "../controllers/authControllers";
import userMiddlewares from "../middlewares/userMiddlewares";
import authMiddlewares from "../middlewares/authMiddlewares";
const router = express.Router();

router.post(
  "/register",
  userMiddlewares.checkRequiredUserFields,
  authMiddlewares.checkRequiredAuthFields,
  authMiddlewares.hashPassword,
  authControllers.register
);
router.post(
  "/send-otp",
  userMiddlewares.checkRequiredUserFields,
  authMiddlewares.checkRequiredAuthFields,
  authMiddlewares.hashPassword,
  authControllers.sendOneTimePasswordEmail
);
router.post("/verify-otp", authControllers.verifyOneTimePasswordToken);

export default router;
