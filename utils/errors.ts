class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
  }
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

class ForbiddenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
  }
}

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

class InternalServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InternalServerError";
  }
}

import { NextFunction, Request, Response } from "express";

const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "BadRequestError") {
    res.status(400).json({
      message: err.message,
    });
  } else if (err.name === "UnauthorizedError") {
    res.status(401).json({
      message: err.message,
    });
  } else if (err.name === "ForbiddenError") {
    res.status(403).json({
      message: err.message,
    });
  } else if (err.name === "NotFoundError") {
    res.status(404).json({
      message: err.message,
    });
  } else if (err.name === "InternalServerError") {
    res.status(500).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: err.message || "Something went wrong",
    });
  }
};

export {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
};

export default handleError;
