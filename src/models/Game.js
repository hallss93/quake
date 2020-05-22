class Game {
    constructor() {
        this.players = new Map();
        this.total_kills = 0;
    }

    static new(parser, line) {
        parser.addGame(new Game(line));
    }

    addKill() {
        this.total_kills++;
    }

    getPlayerById(id) {
        return this.players.has(id) ? this.players.get(id) : null;
    }

    newPlayer(player) {
        this.players.set(player.id, player);
    }

    playersNames() {
        const result = [];
        this.players.forEach(player => {
            result.push(player.username);
        });
        return result;
    }

    playersKills() {
        const result = {};
        this.players.forEach(player => {
            result[player.username] = player.score();
        });
        return result;
    }
}

module.exports = Game;
