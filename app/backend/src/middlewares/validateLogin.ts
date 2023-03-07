import { NextFunction, Request, Response } from 'express';

export function validateName(req: Request, res: Response, next: NextFunction) {
  console.log('req.body ---=> ', req.body);
  const { username } = req.body;

  if (username.length < 8) {
    return res.status(400)
      .json({ message: '"username" length must be at least 8 characters long' });
  }
  return next();
}

export function validateEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  return next();
}

export function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message:
        '"password" length must be at least 6 characters long' });
  }
  return next();
}

export default { validatePassword, validateEmail, validateName };