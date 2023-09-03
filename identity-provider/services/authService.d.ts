/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IUser from "../models/User.d";

export default interface IAuthService {
  /**
   * Creates a new Auth
   * @param userData any
   * @returns Promise<IUser>
   * @memberof IAuthService
   */
  register(userData: any): Promise<IUser>;

  /**
   * Sends an OTP verification code to the user email
   * @param userData any
   * @returns Promise<string> token
   * @memberof IAuthService
   * @example
   * const token = await authService.sendOneTimePasswordEmail({
   *  email: "john@iitism.ac.in",
   *  firstName: "John",
   *  lastName: "Doe",
   *  displayName: "John Doe",
   *  password: "password",
   * });
   * console.log(token);
   * // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc
   * // The token is a JWT token
   */
  sendOneTimePasswordEmail(userData: any): Promise<string>;

  /**
   * Verifies the OTP sent to the user email
   * @param token string
   * @param otp string
   * @returns Promise<Boolean>
   * @memberof IAuthService
   * @example
   * const verified = await authService.verifyOneTimePasswordToken(
   * "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc",
   * "123456"
   * );
   * console.log(verified);
   * // true
   */
  verifyOneTimePasswordToken(token: string, otp: string): Promise<Boolean>;
}
