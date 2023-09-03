/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import EmailUtility from "../../utils/EmailUtility";

describe("EmailUtility", () => {
  describe("when 'to' is not provided", () => {
    it("should return false", async () => {
      const result = await EmailUtility.sendOneTimePasswordEmail({
        to: "",
        otp: "123456",
      });
      expect(result).toBe(false);
    });
  });

  describe("when 'otp' is not provided", () => {
    it("should return false", async () => {
      const result = await EmailUtility.sendOneTimePasswordEmail({
        to: "test@iitism.ac.in",
        otp: "",
      });
      expect(result).toBe(false);
    });
  });

  describe("when all the required details are provided", () => {
    it("should return true", async () => {
      const result = await EmailUtility.sendOneTimePasswordEmail({
        to: "test@iitism.ac.in",
        otp: "123456",
      });
      expect(result).toBe(true);
    });
  });
});
