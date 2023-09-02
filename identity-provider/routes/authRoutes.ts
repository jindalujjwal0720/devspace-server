/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import express from "express";
import authControllers from "../controllers/authControllers";
const router = express.Router();

router.post("/register", authControllers.register);

export default router;
