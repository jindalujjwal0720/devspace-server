/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import { NextFunction, Request, Response } from "express";
import IAuthControllers from "./authControllers.d";
import authService from "../services/authService";
import { BadRequestError } from "../../utils/errors";

class AuthControllers implements IAuthControllers {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user } = req.body;
      const createdUser = await authService.register(user);
      res.status(200).json({
        user: createdUser,
        message: "User created Successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  public async sendOneTimePasswordEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user } = req.body;
      const token = await authService.sendOneTimePasswordEmail(user);
      res.status(200).json({
        token,
        message: "OTP sent successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  public async verifyOneTimePasswordToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { token, otp } = req.body;
      const verified = await authService.verifyOneTimePasswordToken(token, otp);
      if (!verified) throw new BadRequestError("Invalid OTP");
      res.status(200).json({
        verified,
        message: "OTP verified successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthControllers();
