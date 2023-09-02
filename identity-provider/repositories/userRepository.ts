/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import User from "../models/User";
import IUser from "../models/User.d";
import IUserRepository from "./userRepository.d";

class UserRepository implements IUserRepository {
  public async create(user: IUser): Promise<IUser> {
    const createdUser = await User.create(user);
    return createdUser;
  }

  public async getByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email });
  }

  public async getById(_id: string): Promise<IUser | null> {
    return await User.findById(_id);
  }

  public async update(user: IUser): Promise<IUser | null> {
    return await User.findByIdAndUpdate(user._id, user, { new: true });
  }
}

export default new UserRepository();
