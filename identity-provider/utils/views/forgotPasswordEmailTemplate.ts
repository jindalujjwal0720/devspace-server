/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

const forgotPasswordEmailTemplate = (resetPasswordURL: string): string => {
  return `
<div class="container" style="box-sizing: border-box;width: 100%;height: 100%;max-width: 600px;margin: 0 auto;font-family: Arial, Helvetica, sans-serif;">
    <div class="banner" style="box-sizing: border-box;width: 100%;text-align: center;padding-top: 3rem;padding-bottom: 1rem;background-color: hsl(214, 82%, 51%);color: #fff;font-size: 1.5rem;font-weight: 500;letter-spacing: 0.03rem;">
        Devspace Forgot Password
    </div>
    <div class="content" style="box-sizing: border-box;width: 100%;padding: 1rem;font-size: 1rem;font-weight: 400;line-height: 1.4;letter-spacing: 0.03rem;background-color: #fafafa;">
        Devspace has received a request to reset the password for your account. Click the button below to reset your
        password.
        <a class="reset-button" href="${resetPasswordURL}" style="box-sizing: border-box;display: block;padding: 0.7rem 1rem;margin: 1.5rem 0;border-radius: 4px;background-color: hsl(214, 82%, 51%);color: #fff;font-size: 1rem;font-weight: 500;letter-spacing: 0.05rem;text-decoration: none;text-align: center;">
            Reset Password
        </a>
        If you did not request this verification, please ignore this email.
        <br style="box-sizing: border-box;">
        <br style="box-sizing: border-box;">
        Yours sincerely,
        <br style="box-sizing: border-box;">
        The Devspace Accounts Team
    </div>
    <div class="footer" style="box-sizing: border-box;width: 100%;padding: 1rem;background-color: #fff;color: #000;font-size: 0.8rem;font-weight: 400;line-height: 1.4;letter-spacing: 0.03rem;text-align: center;">
        Devspace IIT(ISM) Dhanbad
        <br style="box-sizing: border-box;">
        Dhanbad, Jharkhand, India, Pincode: 826004
    </div>
</div>
`;
};
