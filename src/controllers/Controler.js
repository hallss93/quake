import parser from '../utils/parser';

class GameController {
    index() {
        return (_request, res) => {
            res.json(parser.toObject());
        };
    }

    show() {
        return (request, res) => {
            const game = parser.toObject()[`game_${request.params.id}`];
            if (game) {
                res.json(game);
            } else {
                res.json({ error: `Game ${request.params.id} not found` }).status(404);
            }
        };
    }

    kills() {
        return (request, res) => {
            const game = parser.toObject()[`game_${request.params.id}`];
            if (game) {
                const { kills } = game;
                res.json(kills);
            } else {
                res.json({ error: `Game ${request.params.id} not found` }).status(404);
            }
        };
    }

    players() {
        return (request, res) => {
            const game = parser.toObject()[`game_${request.params.id}`];
            if (game) {
                const { players } = game;
                res.json(players);
            } else {
                res.json({ error: `Game ${request.params.id} not found` }).status(404);
            }
        };
    }

    total_kills() {
        return (request, res) => {
            const game = parser.toObject()[`game_${request.params.id}`];
            if (game) {
                const { total_kills } = game;
                res.json(total_kills);
            } else {
                res.json({ error: `Game ${request.params.id} not found` }).status(404);
            }
        };
    }
}

export default new GameController();
