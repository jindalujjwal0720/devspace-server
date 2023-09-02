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
import { BadRequestError } from "../../utils/errors";
import validator from "validator";
import IUser from "../models/User.d";
import UserService from "./userService";
import { toIUser } from "../models/User";
import { toIAuth } from "../models/Auth";

class AuthService implements IAuthService {
  public async register(userData: any): Promise<IUser> {
    const user: IUser = toIUser(userData);
    const auth: IAuth = toIAuth(userData);
    if (!validator.isEmail(auth.email) || !validator.isEmail(user.email))
      throw new BadRequestError("Invalid email");
    const alreadyExists = await AuthRepository.getByEmail(auth.email);
    if (alreadyExists) throw new BadRequestError("Auth already exists");
    const newUser = await UserService.create(user);
    try {
      await AuthRepository.create(auth);
    } catch (error) {
      await UserService.deleteById(newUser._id);
      throw error;
    }
    return newUser;
  }
}

export default new AuthService();
