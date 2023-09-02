/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IUser from "../models/User.d";
import IAuth from "../models/Auth.d";

export default interface IAuthService {
  /**
   * Creates a new Auth
   * @param auth IAuth
   * @returns Promise<IAuth>
   * @memberof IAuthService
   */
  register(auth: IAuth, user: IUser): Promise<IUser>;
}
