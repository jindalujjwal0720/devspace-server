/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IUserMiddlewares from "./userMiddlewares.d";
import { Request, Response, NextFunction } from "express";

class UserMiddlewares implements IUserMiddlewares {
  public checkRequiredUserFields(
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    const { user } = req.body;
    if (!user) return res.status(400).json({ message: "User is required" });
    const { firstName, displayName, email } = user;
    if (!firstName)
      return res.status(400).json({ message: "First name is required" });
    if (!displayName)
      return res.status(400).json({ message: "Display name is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });
    next();
  }
}

export default new UserMiddlewares();
