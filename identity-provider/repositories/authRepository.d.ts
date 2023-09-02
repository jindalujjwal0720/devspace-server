/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IAuth from "../models/Auth.d";

export default interface IAuthRepository {
  /**
   * Creates a new auth
   * @param {IAuth} auth The auth object
   * @returns {Promise<IAuth>} The created auth object
   * @throws {Error} If the auth already exists
   * @throws {Error} If the auth is not created
   * @memberof IAuthRepository
   * @example
   * const auth = await authRepository.create({
   *  email: "john@devspace.com",
   * passwordHash: "passwordHash",   // Hashed password
   * });
   * console.log(auth);
   * // {
   * //   email: "john@devspace.com",
   * //   passwordHash: "passwordHash",
   * //   _id: "5f9f4a3b9d3e4b1b2c9d4e5f"
   * //   twoFactorAuthEnabled: false,
   * //   isBlocked: false,
   * //   isDeleted: false,
   * // }
   */
  create(auth: IAuth): Promise<IAuth>;

  /**
   * Gets a auth by email
   * @param {string} email The email of the auth
   * @returns {Promise<IAuth | null>} The auth object
   * @throws {Error} If the auth is not found
   * @memberof IAuthRepository
   * @example
   * const auth = await authRepository.getByEmail("john@iitism.ac.in");
   * console.log(auth);
   * // {
   * //   email: "john@devspace.com",
   * //   passwordHash: "passwordHash",
   * //   _id: "5f9f4a3b9d3e4b1b2c9d4e5f"
   * //   twoFactorAuthEnabled: false,
   * //   isBlocked: false,
   * //   isDeleted: false,
   * // }
   * @example
   * const auth = await authRepository.getByEmail("lisa@iitism.ac.in");
   * console.log(auth);
   * // null
   */
  getByEmail(email: string): Promise<IAuth | null>;

  /**
   * Gets a auth by id
   * @param {string} id The id of the auth
   * @returns {Promise<IAuth | null>} The auth object
   * @throws {Error} If the auth is not found
   * @memberof IAuthRepository
   * @example
   * const auth = await authRepository.getById("5f9f4a3b9d3e4b1b2c9d4e5f");
   * console.log(auth);
   * // {
   * //   email: "john@devspace.com",
   * //   passwordHash: "passwordHash",
   * //   _id: "5f9f4a3b9d3e4b1b2c9d4e5f"
   * //   twoFactorAuthEnabled: false,
   * //   isBlocked: false,
   * //   isDeleted: false,
   * // }
   * @example
   * const auth = await authRepository.getById("5f9f4a3b9d3e4b1b2c9d4e5f");
   * console.log(auth);
   * // null
   */
  getById(id: string): Promise<IAuth | null>;
}
