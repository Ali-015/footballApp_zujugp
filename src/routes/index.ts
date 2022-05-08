import * as Express from 'express';

import { getMatches, getMatchById, getUserMatchesById } from 'routes/matches';
import { getTeams, getTeamById, getTeamsnew } from 'routes/teams';

export const initRoutes = (app: Express.Application) => {
	app.get('/team/:id', getTeamById);
	app.get('/match/:id', getMatchById);
	app.get('/matches', getMatches);
	app.get('/teams', getTeams);
	app.get('/teamsnew', getTeamsnew);
	app.get('/userMatch/:id', getUserMatchesById);
};
