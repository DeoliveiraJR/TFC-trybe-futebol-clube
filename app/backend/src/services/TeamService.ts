import Team from '../database/models/TeamModel';

export default class TeamService {
  public getAll = async () => {
    const teams = await Team.findAll();
    return teams;
  };

  public getById = async (id: string) => {
    const result = await Team.findByPk(id);

    return result;
  };
}