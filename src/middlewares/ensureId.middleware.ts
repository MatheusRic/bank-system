import { Request, Response, NextFunction } from "express";

const ensureIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id === req.params.id) {
    return next();
  }
  return res.status(403).json({ message: "Incorrect id" });
};

export default ensureIdMiddleware;
