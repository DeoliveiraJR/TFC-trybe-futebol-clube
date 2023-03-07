import { ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, next) => {
  if (err.name === 'AppError') {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });

  next();
};

export default errorMiddleware;