import { Request, Response, NextFunction } from 'express';

import CustomError from '../errors/custom.error';

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(
    'InvalidInput',
    404,
    `Extension is not found at ${req.path}`
  );
  next(error);
};
