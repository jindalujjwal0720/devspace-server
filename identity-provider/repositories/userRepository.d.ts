/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import { IUser } from "../models/User";

export default interface IUserRepository {
  /**
   * Creates a new user
   * @param {IUser} user The user object
   * @returns {Promise<IUser>} The created user object
   * @throws {Error} If the user already exists
   * @throws {Error} If the user is not created
   * @memberof IUserRepository
   * @example
   * const user = await userRepository.create({
   *  firstName: "John",
   * lastName: "Doe",
   * displayName: "John Doe",
   * email: "john@devspace.com"
   * });
   * console.log(user);
   * // {
   * //   firstName: "John",
   * //   lastName: "Doe",
   * //   displayName: "John Doe",
   * //   email: "john@devspace.com",
   * //   _id: "5f9f4a3b9d3e4b1b2c9d4e5f"
   * // }
   */
  createUser(user: IUser): Promise<IUser>;
}
