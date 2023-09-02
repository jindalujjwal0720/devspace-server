

import mongoose from "mongoose";
import IAuth from "./Auth.d";

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
