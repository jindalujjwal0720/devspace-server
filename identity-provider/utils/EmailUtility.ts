/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import nodeMailer from "nodemailer";
import IEmailUtility from "./EmailUtility.d";
import otpEmailTemplate from "./views/otpEmailTemplate";

class EmailUtility implements IEmailUtility {
  private transporter: nodeMailer.Transporter;

  constructor() {
    const EMAIL_CONFIG = {
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: process.env.EMAIL_SECURE === "TRUE" ? true : false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    };

    this.transporter = nodeMailer.createTransport(EMAIL_CONFIG);
  }

  public async sendOneTimePasswordEmail(config: {
    to: string;
    otp: string;
  }): Promise<boolean> {
    const { to, otp } = config;
    if (!to || !otp) return false;
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject: "One Time Password",
        html: otpEmailTemplate(otp),
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export default new EmailUtility();
