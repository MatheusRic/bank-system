import { Request, Response, NextFunction } from "express";

const ensureKeyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.hasOwnProperty("id") || req.body.hasOwnProperty("name")) {
    return res
      .status(401)
      .json({ message: "you can't update the id, or name" });
  }

  next();
};

export default ensureKeyMiddleware;
