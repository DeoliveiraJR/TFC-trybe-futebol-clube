import { Request, Response } from 'express';
import MatchesService from '../services/MatchService';

class MatchesController {
  private matchesService: MatchesService;

  constructor() {
    this.matchesService = new MatchesService();
  }

  public filterMatchesByStatus = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const matches = await this.matchesService.filterMatchesByStatus(inProgress as string);
    res.status(200).json(matches);
  };
}

export default MatchesController;