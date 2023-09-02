/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import mongoose from "mongoose";

export default interface IAuth extends mongoose.Document {
  email: string;
  passwordHash: string;
  twoFactorAuthEnabled: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
}
