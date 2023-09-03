/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

export default (otp: string): string => {
  return (
`
<style>
    .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .company-logo {
        width: 100%;
        text-align: center;
        margin-top: 20px;
    }

    .company-logo span {
        font-size: 30px;
        font-weight: bold;
        color: #000;
    }

    .content {
        width: 100%;
        margin-top: 20px;
    }

    .footer {
        
    }
</style>
<div class="container">
    <div class="company-logo">
        <span>Devspace</span>
    </div>
    <div class="content">
        <h1>One Time Password</h1>
        <p>Use the following OTP to verify your email address.</p>
        <h2>${otp}</h2>
    </div>
    <div class="footer">
        <p>Devspace IIT(ISM) Dhanbad</p>
        <p>© 2023 Devspace IIT(ISM) Dhanbad. All rights reserved.</p>
    </div>
</div>
`
  );
};
