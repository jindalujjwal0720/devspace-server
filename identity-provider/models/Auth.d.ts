import mongoose from "mongoose";

export default interface IAuth extends mongoose.Document {
  email: string;
  passwordHash: string;
  twoFactorAuthEnabled: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
}
