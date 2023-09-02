/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import { NextFunction, Request, Response } from "express";
import IUserControllers from "./userControllers.d";
import IUser from "../models/User.d";
import userService from "../services/userService";

class UserControllers implements IUserControllers {
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user } = req.body;
      const updatedUser = await userService.update(user as IUser);
      res
        .status(200)
        .json({ user: updatedUser, message: "User updated Successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserControllers();
