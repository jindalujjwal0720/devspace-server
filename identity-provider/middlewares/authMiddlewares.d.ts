/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import { Request, Response, NextFunction } from "express";

export default interface IAuthMiddlewares {
  /**
   * Middleware to check the required fields for user registration
   * @param req Request object
   * @param res Response object
   * @param next Next function
   * @returns void
   * @memberof IAuthMiddlewares
   */
  checkRequiredAuthFields(req: Request, res: Response, next: NextFunction): any;
  hashPassword(req: Request, res: Response, next: NextFunction): Promise<void>;
}
