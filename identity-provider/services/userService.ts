/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IUserService from "./userService.d";
import UserRepository from "../repositories/userRepository";
import { IUser } from "../models/User";

class UserService implements IUserService {
  public async createUser(user: IUser): Promise<IUser> {
    const createdUser = await UserRepository.createUser(user);
    return createdUser;
  }
}

export default new UserService();
