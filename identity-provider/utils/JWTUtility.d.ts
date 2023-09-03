/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

export default interface IJWTUtility {
  createOneTimePasswordToken(payload: any, otp: string): string;
  verifyOneTimePasswordToken(token: string, otp: string): any;
}
