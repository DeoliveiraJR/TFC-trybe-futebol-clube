import { Router } from 'express';
import loginRouter from './login.route';
import teamRouter from './team.route';
import matchesRouter from './matches.route';

const router = Router();

router.use('/login', loginRouter);
router.use('/team', teamRouter);
router.use('/matches', matchesRouter);

export default router;