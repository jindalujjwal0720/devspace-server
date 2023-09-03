/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IAuthService from "./authService.d";
import AuthRepository from "../repositories/authRepository";
import IAuth from "../models/Auth.d";
import { BadRequestError, InternalServerError } from "../../utils/errors";
import validator from "validator";
import IUser from "../models/User.d";
import UserService from "./userService";
import { toIUser } from "../models/User";
import { toIAuth } from "../models/Auth";
import JWTUtility from "../utils/JWTUtility";
import EmailUtility from "../utils/EmailUtility";

class AuthService implements IAuthService {
  public async register(userData: any): Promise<IUser> {
    const user: IUser = toIUser(userData);
    const auth: IAuth = toIAuth(userData);
    if (!validator.isEmail(auth.email) || !validator.isEmail(user.email))
      throw new BadRequestError("Invalid email");
    const alreadyExists = await AuthRepository.getByEmail(auth.email);
    if (alreadyExists)
      throw new BadRequestError("User with email already exists");
    const newUser = await UserService.create(user);
    try {
      await AuthRepository.create(auth);
    } catch (error) {
      await UserService.deleteById(newUser._id);
      throw error;
    }
    return newUser;
  }

  public async sendOneTimePasswordEmail(userData: any): Promise<string> {
    const user: IUser = toIUser(userData);
    const auth: IAuth = toIAuth(userData);
    if (!validator.isEmail(auth.email) || !validator.isEmail(user.email))
      throw new BadRequestError("Invalid email");
    const alreadyExists = await AuthRepository.getByEmail(auth.email);
    if (alreadyExists)
      throw new BadRequestError("User with email already exists");
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const token = JWTUtility.createOneTimePasswordToken(userData, otp);
    const sent = await EmailUtility.sendOneTimePasswordEmail({
      to: auth.email,
      otp,
    });
    if (!sent) throw new InternalServerError("OTP could not be sent");
    return token;
  }

  public async verifyOneTimePasswordToken(
    token: string,
    otp: string
  ): Promise<Boolean> {
    try {
      const payload = JWTUtility.verifyOneTimePasswordToken(token, otp);
      return !!payload;
    } catch (error) {
      return false;
    }
  }
}

export default new AuthService();
