/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import bcryptjs from "bcryptjs";
import IHashUtility from "./HashUtility.d";

class HashUtility implements IHashUtility {
  public async hashPasswordWithSalt(
    password: string,
    salt: string
  ): Promise<string> {
    return await bcryptjs.hash(password, salt);
  }

  public async hashPassword(password: string): Promise<string> {
    return await bcryptjs.hash(password, 10);
  }

  public async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    return await bcryptjs.compare(password, hash);
  }
}

export default new HashUtility();
