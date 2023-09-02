/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IUserService from "./userService.d";
import UserRepository from "../repositories/userRepository";
import IUser from "../models/User.d";
import { BadRequestError } from "../../utils/errors";
import validator from "validator";

class UserService implements IUserService {
  public async create(user: IUser): Promise<IUser> {
    if (!validator.isEmail(user.email))
      throw new BadRequestError("Invalid email");
    const alreadyExists = await UserRepository.getByEmail(user.email);
    if (alreadyExists) throw new BadRequestError("User already exists");
    const createdUser = await UserRepository.create(user);
    return createdUser;
  }
}

export default new UserService();
