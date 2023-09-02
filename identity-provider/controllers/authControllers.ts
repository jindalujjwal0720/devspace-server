/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import { NextFunction, Request, Response } from "express";
import IAuthControllers from "./authControllers.d";
import IAuth from "../models/Auth.d";
import authService from "../services/authService";
import IUser from "../models/User.d";

class AuthControllers implements IAuthControllers {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { auth, user } = req.body;
      const createdAuth = await authService.register(
        auth as IAuth,
        user as IUser
      );
      res
        .status(200)
        .json({
          auth: createdAuth,
          message: "Auth and User created Successfully",
        });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthControllers();
