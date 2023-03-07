import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import verifyToken from '../utils/verifyToken';
import Unauthorized from '../errors/UnauthorizedError';
import { IUser } from '../interfaces/index';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export function generateToken(user: IUser): string {
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payload = { id: user.id, name: user.username };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
}

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  console.log('[TOKEN.TS]-token ===', token);

  if (!token) {
    throw new Unauthorized('Token not found');
    // return res.status(401).json({ message: 'Token not found' });
  }

  try {
    // const payload = jwt.verify(token, secret);
    const payload = verifyToken(token);
    console.log('[PAYLOAD.TS]-payload ===', payload);
    // console.log('[VALIDATETOKEN]-payload ===', payload);
    // console.log('[VALIDATETOKEN]-req ===', req.params);
    // req.user = payload;
    // return payload as jwt.JwtPayload;
    next();
  } catch (err) {
    throw new Unauthorized('Expired or invalid token');
    // return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

export default { generateToken, validateToken };