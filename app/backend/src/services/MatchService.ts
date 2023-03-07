import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

class MatchesService {
  public getAllMatches = async () => {
    const matches = await Match.findAll({
      include: [{
        model: Team,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      { model: Team,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
    });
    return matches;
  };

  public filterMatchesByStatus = async (filter: string) => {
    if (filter === 'true') {
      const matches = await this.getAllMatches();
      const filteredMatches = matches.filter((match) => match.inProgress === true);
      return filteredMatches;
    }

    if (filter === 'false') {
      const matches = await this.getAllMatches();
      const filteredMatches = matches.filter((match) => match.inProgress === false);
      return filteredMatches;
    }

    const filteredMatches = await this.getAllMatches();
    return filteredMatches;
  };
}

export default MatchesService;