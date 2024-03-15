// traccia 3
let bowling = {
    'players': [
        { 'name': 'Livio', 'scores': [], 'somma': 0 },
        { 'name': 'Paola', 'scores': [], 'somma': 0 },
        { 'name': 'Filippo', 'scores': [], 'somma': 0 },
        { 'name': 'Giuseppe', 'scores': [], 'somma': 0 }
    ],
    'createScore': function () {
        this.players.forEach(person => {
            // console.log(person.name);
            for (let i = 0; i < 10; i++) {
                person.scores.push(Math.floor(Math.random() * 10 + 1));
            }
        });
    },
    'sommaPunteggi': function () {
        this.players.forEach(element => {
            element.somma = element.scores.reduce((acc, el) => acc + el, 0);
            // console.log(element.somma);
        });

    },

    'addPlayer': function (name) {
        let newscore = [];
        for (let i = 0; i < 10; i++) {


            newscore.push(Math.floor(Math.random() * 10 + 1));
        }

        this.players.push({ 'name': name, 'scores': newscore, 'somma': 0 });

    },
    'orderPlayer': function () {
        this.players.sort(function (a, b) { return b.somma - a.somma });
    },
    'printChart': function () {
        this.orderPlayer();
        console.log("CLASSIFICA:");
        this.players.forEach((element, index) => {
            console.log(`${index + 1}° posto:${element.name} con ${element.somma} punti`);
        });
    },
    'printWinner': function () {
        this.orderPlayer();
        console.log(`il vincitore è ${this.players[0].name}\n Congratulazioni 🏆! `);
    }
}



bowling.createScore();
bowling.addPlayer("Laura");
bowling.sommaPunteggi();
bowling.orderPlayer()
bowling.printWinner();
bowling.printChart();

// console.log(bowling);


