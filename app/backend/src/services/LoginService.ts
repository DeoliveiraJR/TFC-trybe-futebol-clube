import 'dotenv/config';
import { compareSync } from 'bcryptjs';
import { generateToken } from '../middlewares/tokens';
import User from '../database/models/UserModel';
import BadRequest from '../errors/BadRequestError';
import Unauthorized from '../errors/UnauthorizedError';
import verifyToken from '../utils/verifyToken';

export default class LoginService {
  private model = User;

  // constructor(readonly model = new User()) { }

  public async login(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new BadRequest('All fields must be filled');
    }

    const user = await this.model.findOne({ where: { email } });
    // console.log('[LOGINSERVICE]-user ===', user);

    if (!user || !compareSync(password, user.password)) {
      throw new Unauthorized('Incorrect email or password !!!');
    }

    const token = generateToken(user);
    return token;
  }

  public getLoginRole = async (token: string) => {
    const decoded = verifyToken(token);
    const { name } = decoded;
    console.log('[LOGINSERVICE]-decoded ===', decoded);
    console.log('[LOGINSERVICE]-name ===', name);
    // console.log('[LOGINSERVICE]-decoded.data ===', decoded.name);

    return { status: 200, role: { role: name } };
  };
}