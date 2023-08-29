/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import User, { IUser } from "../models/User";
import IUserRepository from "./userRepository.d";

class UserRepository implements IUserRepository {
  public async createUser(user: IUser): Promise<IUser> {
    const createdUser = await User.create(user);
    return createdUser;
  }
}

export default new UserRepository();
