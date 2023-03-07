import { Router } from 'express';
import { validateToken } from '../middlewares/tokens';
import LoginController from '../controllers/LoginController';

const loginRoute = Router();

const loginController = new LoginController();

loginRoute.post('/', loginController.login);
loginRoute.get('/validate', validateToken, loginController.getLoginValidate);
// loginRoute.post('/', (req, res) => loginController.login(req, res));

export default loginRoute;