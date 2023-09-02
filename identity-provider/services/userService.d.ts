/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IUser from "../models/User.d";

export default interface IUserService {
  /**
   * Creates a new user
   * @param user IUser
   * @returns Promise<IUser>
   * @memberof IUserService
   */
  create(user: IUser): Promise<IUser>;

  /**
   * Updates a user
   * @param user IUser
   * @returns Promise<IUser | null>
   * @memberof IUserService
   * @throws Error
   * @example
   * const user = await userService.update({
   *   _id: "5f9f4a3b9d3e4b1b2c9d4e5f",
   *   firstName: "John",
   *   lastName: "Doe",
   *   displayName: "John Doe",
   *   email: "john@iitism.ac.in"
   * });
   * console.log(user);
   * // {
   * //   _id: "5f9f4a3b9d3e4b1b2c9d4e5f",
   * //   firstName: "John",
   * //   lastName: "Doe",
   * //   displayName: "John Doe",
   * //   email: "john@iitism.ac.in"
   * // }
   */
  update(user: IUser): Promise<IUser | null>;

  /**
   * Deletes a user by id
   * @param id string
   * @returns Promise<IUser | null>
   * @memberof IUserService
   * @throws Error
   * @example
   * const user = await userService.deleteById("5f9f4a3b9d3e4b1b2c9d4e5f");
   * console.log(user);
   * // {
   * //   _id: "5f9f4a3b9d3e4b1b2c9d4e5f",
   * //   firstName: "John",
   * //   lastName: "Doe",
   * //   displayName: "John Doe",
   * //   email: "john@iitism.ac.in"
   * // }
   * @example
   * const user = await userService.deleteById("5f9f4a3b9d3e4b1b2c9d4e5f");
   * console.log(user);
   * // null
   */
  deleteById(id: string): Promise<IUser | null>;
}
