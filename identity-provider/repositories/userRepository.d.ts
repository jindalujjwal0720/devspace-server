/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IUser from "../models/User.d";

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
  create(user: IUser): Promise<IUser>;

  /**
   * Gets a user by email
   * @param {string} email The email of the user
   * @returns {Promise<IUser | any>} The user object
   * @throws {Error} If the user is not found
   * @memberof IUserRepository
   * @example
   * const user = await userRepository.getByEmail("john@iitism.ac.in");
   * console.log(user);
   * // {
   * //   firstName: "John",
   * //   lastName: "Doe",
   * //   displayName: "John Doe",
   * //   email: "john@iitism.ac.in",
   * //   _id: "5f9f4a3b9d3e4b1b2c9d4e5f"
   * // }
   * @example
   * const user = await userRepository.getByEmail("lisa@iitism.ac.in");
   * console.log(user);
   * // null
   */
  getByEmail(email: string): Promise<IUser | any>;
}
