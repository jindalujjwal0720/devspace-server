/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import HashUtility from "../utils/HashUtility";
import IAuthMiddlewares from "./authMiddlewares.d";
import { Request, Response, NextFunction } from "express";

class AuthMiddlewares implements IAuthMiddlewares {
  public checkRequiredAuthFields(
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    const { user } = req.body;
    if (!user) return res.status(400).json({ message: "User is required" });
    const { email, password } = user;
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });
    next();
  }

  public hashPassword(req: Request, res: Response, next: NextFunction): void {
    const { user } = req.body;
    const { password } = user;
    const hashedPassword = HashUtility.hashPassword(password);
    user.passwordHash = hashedPassword;
    next();
  }
}

export default new AuthMiddlewares();
