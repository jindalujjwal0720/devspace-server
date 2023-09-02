/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import mongoose from "mongoose";
import IUser from "./User.d";

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  displayName: {
    type: String,
    trim: true,
    required: true,
  },
  profilePictureURL: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    trim: true,
  },
  address: {
    type: {
      street: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      country: {
        type: String,
        trim: true,
      },
      pincode: {
        type: String,
        trim: true,
      },
    },
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
});

export const toIUser = (user: any): IUser => {
  const { firstName, displayName, email } = user;
  if (!firstName) throw new Error("First name is required");
  if (!displayName) throw new Error("Display name is required");
  if (!email) throw new Error("Email is required");
  return <IUser>{
    firstName: user.firstName,
    lastName: user.lastName,
    displayName: user.displayName,
    profilePictureURL: user.profilePictureURL,
    dob: user.dob,
    address: user.address,
    phone: user.phone,
    email: user.email,
  };
};

export default mongoose.model<IUser>("User", UserSchema);
