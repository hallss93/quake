import { Router } from 'express';
import Controler from './controllers/Controler';
const routes = new Router();

routes.get('/games', Controler.index());
routes.get('/game/:id', Controler.show());
routes.get('/game/:id/kills', Controler.kills());
routes.get('/game/:id/players', Controler.players());
routes.get('/game/:id/total_kills', Controler.total_kills());

export default routes;
