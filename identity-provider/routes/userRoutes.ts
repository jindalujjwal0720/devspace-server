/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import express from "express";
import userControllers from "../controllers/userControllers";
const router = express.Router();

router.patch("/update", userControllers.update);

export default router;
