/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import nodeMailer from "nodemailer";
import IEmailUtility from "./EmailUtility.d";

class EmailUtility implements IEmailUtility {
  private transporter: nodeMailer.Transporter;
  constructor() {
    this.transporter = nodeMailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  public async sendOTPMail(config: {
    to: string;
    otp: string;
  }): Promise<boolean> {
    const { to, otp } = config;
    if (!to || !otp) {
      return false;
    }
    await this.transporter.sendMail(
      {
        from: process.env.GMAIL_USER,
        to,
        subject: "OTP for Identity Provider Service",
        text: "Your OTP is " + otp + ".",
        html: "Your OTP is " + otp + ".",
      },
      (error, info) => {
        if (error) {
          return false;
        }
        return true;
      }
    );
    return true;
  }
}

export default new EmailUtility();
