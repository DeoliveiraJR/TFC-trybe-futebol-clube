import { Request, Response } from 'express';
import Unauthorized from '../errors/UnauthorizedError';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(readonly service = new LoginService()) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await this.service.login(email, password);
    // console.log('[LOGINCONTROLLER]-req.body === ', req.body);
    // console.log('[LOGINCONTROLLER]-token === ', token);

    return res.status(200).json({ token });
  };

  getLoginValidate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const token = authorization;

    if (!token) {
      throw new Unauthorized('Token not found');
    }

    const result = await this.service.getLoginRole(token);
    console.log('[LOGIN-CONTROLLER]-result ===', result);

    res.status(result.status).json(result.role);
  };
}