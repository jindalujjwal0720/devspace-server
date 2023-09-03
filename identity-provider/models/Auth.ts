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

export const toIAuth = (auth: any): IAuth => {
  const { email, passwordHash } = auth;
  if (!email) throw new Error("Email is required");
  if (!passwordHash) throw new Error("Password hash is required");
  return <IAuth>{
    email: auth.email,
    passwordHash: auth.passwordHash,
    twoFactorAuthEnabled: auth.twoFactorAuthEnabled || false,
    isBlocked: auth.isBlocked || false,
    isDeleted: auth.isDeleted || false,
  };
};

export default mongoose.model<IAuth>("Auth", AuthSchema);
