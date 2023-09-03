/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import IJWTUtility from "./JWTUtility.d";
import jwt from "jsonwebtoken";

class JWTUtility implements IJWTUtility {
  public createOneTimePasswordToken(payload: any, otp: string): string {
    return jwt.sign(payload, process.env.JWT_OTP_TOKEN_SECRET + otp, {
      expiresIn: process.env.JWT_OTP_TOKEN_EXPIRES_IN,
    });
  }

  public verifyOneTimePasswordToken(token: string, otp: string): any {
    return jwt.verify(token, process.env.JWT_OTP_TOKEN_SECRET + otp);
  }
}

export default new JWTUtility();
