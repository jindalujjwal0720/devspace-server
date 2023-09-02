/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IAuth from "../models/Auth.d";
import Auth from "../models/Auth";
import IAuthRepository from "./authRepository.d";

class AuthRepository implements IAuthRepository {
  public async create(auth: IAuth): Promise<IAuth> {
    const createdAuth = await Auth.create(auth);
    return createdAuth;
  }
  public async getByEmail(email: string): Promise<IAuth | null> {
    return await Auth.findOne({ email: email });
  }

  public async getById(_id: string): Promise<IAuth | null> {
    return await Auth.findById(_id);
  }
}

export default new AuthRepository();
