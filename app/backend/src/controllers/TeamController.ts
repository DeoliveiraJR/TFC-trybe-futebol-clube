import { Request, RequestHandler, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  private teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const teams = await this.teamService.getAll();
    res.status(200).json(teams);
  };

  public getById: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const team = await this.teamService.getById(id);

    return res.status(200).json(team);
  };
}