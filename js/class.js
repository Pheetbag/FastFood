
function Game(){

    //game level
    this.level;

    //game cicles
    this.cicle = new Cicle;

    //player
    this.player = new Player;

}

function Cicle(){
    
    this.current = 0;
    this.controller = setInterval('newCicle()', 100); 
    this.state = 'off';

    Cicle.prototype.clear = function(){
        clearInterval(this.controller);
    }

}

function Player(){

    this.hearts = 6;
    this.stars = 0;
    this.name = 'unknown';
    this.money = 0;

}

//var game = new Game;


