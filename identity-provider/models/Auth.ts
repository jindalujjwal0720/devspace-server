/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import mongoose from "mongoose";

export interface IAuth extends mongoose.Document {
  email: string;
  passwordHash: string;
  twoFactorAuthEnabled: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
}

const AuthSchema: mongoose.Schema<IAuth> = new mongoose.Schema<IAuth>({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    trim: true,
    required: true,
  },
  twoFactorAuthEnabled: {
    type: Boolean,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model<IAuth>("Auth", AuthSchema);
