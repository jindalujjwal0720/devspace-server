/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import EmailUtility from "../../utils/EmailUtility";

describe("MailingUtility", () => {
  it("if to not provided", async () => {
    const result = await EmailUtility.sendOTPMail({
      to: "",
      otp: "123456",
    });
    expect(result).toBe(false);
  });
  it("if otp not provided", async () => {
    const result = await EmailUtility.sendOTPMail({
      to: "test@gmail.com",
      otp: "",
    });
    expect(result).toBe(false);
  });
  it("if otp and to provided", async () => {
    const result = await EmailUtility.sendOTPMail({
      to: "chandraprakash47637@gmail.com",
      otp: "654321",
    });
    expect(result).toBe(true);
  });
});
