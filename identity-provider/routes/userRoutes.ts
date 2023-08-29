/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import express, { Request, Response } from "express";
import UserControllers from "./../controllers/userControllers";

const router = express.Router();

router.post("/create", UserControllers.createUser);

export default router;
