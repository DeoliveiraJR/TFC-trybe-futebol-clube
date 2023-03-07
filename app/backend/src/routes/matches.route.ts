import { Router } from 'express';
import MatchesController from '../controllers/MatchController';

const matchesRouter = Router();

const matchesController = new MatchesController();

matchesRouter.get('/', matchesController.filterMatchesByStatus);

export default matchesRouter;