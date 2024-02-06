import { MatchesInterface } from '../../Interfaces/macthes.interface';

const totalGames = (teamId: number, matches: MatchesInterface[]): number => {
  const all = matches.filter(
    (match) => match.homeTeamId === teamId || match.awayTeamId === teamId,
  );
  return all.length;
};

const totalWinsHome = (teamId: number, matches: MatchesInterface[]): number => {
  const wins = matches
    .filter((match) => match.homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals);
  return wins.length;
};

const totalWinsAway = (teamId: number, matches: MatchesInterface[]): number => {
  const wins = matches
    .filter((match) => match.awayTeamId === teamId && match.awayTeamGoals > match.homeTeamGoals);
  return wins.length;
};

const totalLosses = (teamId: number, matches: MatchesInterface[]): number => {
  const lossesHome = matches
    .filter((match) => match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals);
  const lossesAway = matches
    .filter((match) => match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals);
  const all = lossesHome.length + lossesAway.length;
  return all;
};

const totalDraws = (teamId: number, matches: MatchesInterface[]): number => {
  const draws = matches
    .filter((match) => (match.homeTeamId === teamId || match.awayTeamId === teamId)
      && match.homeTeamGoals === match.awayTeamGoals);
  return draws.length;
};

const totalPoints = (teamId: number, matches: MatchesInterface[]): number => {
  const wins = totalWinsHome(teamId, matches) + totalWinsAway(teamId, matches);
  const draws = totalDraws(teamId, matches);
  return (wins * 3) + draws;
};

const goalsOwn = (teamId: number, matches: MatchesInterface[]): number => {
  const goalsTakenHome = matches
    .filter((match) => match.homeTeamId === teamId)
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);
  const goalsTakenAway = matches
    .filter((match) => match.awayTeamId === teamId)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  return goalsTakenHome + goalsTakenAway;
};

const goals = (teamId: number, matches: MatchesInterface[]): number => {
  const goalsScoredHome = matches
    .filter((match) => match.homeTeamId === teamId)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  const goalsScoredAway = matches
    .filter((match) => match.awayTeamId === teamId)
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);
  return goalsScoredHome + goalsScoredAway;
};

export {
  totalGames,
  totalWinsHome,
  totalWinsAway,
  totalLosses,
  totalDraws,
  goalsOwn,
  goals,
  totalPoints,
};