import * as jwt from 'jsonwebtoken';

import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default (token: string): jwt.JwtPayload => {
  const result = jwt.verify(token, secret);

  return result as jwt.JwtPayload;
};