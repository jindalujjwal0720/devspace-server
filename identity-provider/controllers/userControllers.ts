/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import { NextFunction, Request, Response } from "express";
import IUserControllers from "./userControllers.d";
import UserService from "../services/userService";
import { IUser } from "./../models/User";

class UserControllers implements IUserControllers {
  public async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user: IUser = req.body.user;
      const createdUser = await UserService.createUser(user);
      res.status(201).json({
        message: "User created successfully",
        user: createdUser,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new UserControllers();
