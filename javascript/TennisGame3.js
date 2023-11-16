//CÓDIGO REFATORADO:

const TennisGame3 = function(player1Name, player2Name) {
    this.scores = ["Love", "Fifteen", "Thirty", "Forty"];
    this.player1 = 0;
    this.player2 = 0;
    this.playerNames = {
        player1: player1Name,
        player2: player2Name
    };
};

TennisGame3.prototype.getScore = function() {
    if (this.isScoreBelowDeuce()) {
        return this.getScoreBelowDeuce();
    } else {
        if (this.player1 === this.player2) {
            return "Deuce";
        }

        const leadingPlayer = this.player1 > this.player2 ? this.playerNames.player1 : this.playerNames.player2;
        return Math.abs(this.player1 - this.player2) === 1 ? `Advantage ${leadingPlayer}` : `Win for ${leadingPlayer}`;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    playerName === "player1" ? this.player1++ : this.player2++;
};

TennisGame3.prototype.isScoreBelowDeuce = function() {
    return this.player1 < 4 && this.player2 < 4 && this.player1 + this.player2 < 6;
};

TennisGame3.prototype.getScoreBelowDeuce = function() {
    const scoreText = this.scores[this.player1];
    return this.player1 === this.player2 ? `${scoreText}-All` : `${scoreText}-${this.scores[this.player2]}`;
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}

//CÓDIGO ORIGINAL

/*  var TennisGame3 = function(p1N, p2N) {
    this.p2 = 0;
    this.p1 = 0;

    this.p1N = p1N;
    this.p2N = p2N;
};

TennisGame3.prototype.getScore = function() {
    var s;
    if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
        var p = ["Love", "Fifteen", "Thirty", "Forty"];
        s = p[this.p1];
        return (this.p1 == this.p2) ? s + "-All" : s + "-" + p[this.p2];
    } else {
        if (this.p1 == this.p2)
            return "Deuce";
        s = this.p1 > this.p2 ? this.p1N : this.p2N;
        return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? "Advantage " + s : "Win for " + s;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "player1")
        this.p1 += 1;
    else
        this.p2 += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}  */ 
