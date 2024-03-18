// traccia 3
let bowling = {
    'players': [
        { 'name': 'Livio', 'scores': []},
        { 'name': 'Paola', 'scores': []},
        { 'name': 'Filippo', 'scores': []},
        { 'name': 'Giuseppe', 'scores': []}
       
    ],
    'createScore': function () {
        this.players.forEach(person => {
            // console.log(person.name);
            for (let i = 0; i < 10; i++) {
                person.scores.push(Math.floor(Math.random() * 10 + 1));
            }
        });
    },
    'setFinalScore': function () {
        this.players.forEach(element => {
            element.somma = element.scores.reduce((acc, el) => acc + el, 0);
            // console.log(element.somma);
        });

    },

    'addPlayer': function (name) {
        let newscore = [];
        for (let i = 0; i < 10; i++) {


            newscore.push(Math.floor(Math.random() * 11));
        }

        this.players.push({ 'name': name, 'scores': newscore });

    },
    'orderPlayer': function () {
        this.players.sort(function (a, b) { return b.somma - a.somma });
    },
    'printChart': function () {
        this.setFinalScore();
        this.orderPlayer();
        console.log("CLASSIFICA:");
        this.players.forEach((element, index) => {
            console.log(`${index + 1}° posto: ${element.name} con ${element.somma} punti [${element.scores}]`);
        });
    },
    'printWinner': function () {
        this.setFinalScore();
        this.orderPlayer();
        if (this.players[0].somma>this.players[1].somma) {
            console.log(`il vincitore è ${this.players[0].name} con ${this.players[0].somma} punti\n Congratulazioni 🏆! `);
        }else{
            
            let filtered = this.players.filter(el => {return el.somma=== this.players[0].somma});
            console.log(filtered);
            let stringaPareggio="C'è stato un pareggio i vincitori sono: ";
            filtered.forEach(el => stringaPareggio+= `${el.name} e `)
            stringaPareggio+=`hanno totalizzato ${this.players[0].somma} punti`   
            console.log(stringaPareggio);
             }

    }
}



bowling.createScore();
bowling.addPlayer("Laura");
bowling.addPlayer("Marco");
bowling.addPlayer("Sara");
bowling.addPlayer("Carolina");
bowling.setFinalScore();
bowling.orderPlayer()
bowling.printWinner();
bowling.printChart();

// console.log(bowling);


