/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import mongoose from "mongoose";

export default interface IUser extends mongoose.Document {
  firstName: string;
  lastName?: string;
  displayName: string;
  profilePictureURL?: string;
  dob?: Date;
  gender?: string;
  address: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
  };
  phone?: string;
  email: string;
}
