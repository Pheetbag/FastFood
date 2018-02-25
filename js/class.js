
function Game(){

    //game level
    this.level;

    //game cicles
    this.cicle = new Cicle;

    //player
    this.player = new Player;

    //game render
    //this.render = new Render;

    //ramdom values
    this.random = function(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
}

function Cicle(){
    
    this.current = 0;
    this.currentDeca = 0;
    this.currentHecta = 0;
    this.currentGlobal = [this.current, this.currentDeca, this.currentHecta];

    this.controller = setInterval(cicleUpdate, 100); 
    this.state = 'off';

    Cicle.prototype.update = function(){
        //define a new cicle execution
        if(this.state == 'off'){return;}

        this.current++;
        this.currentDeca = Math.trunc(this.current/10);
        this.currentHecta = Math.trunc(this.current/1000); 
        this.currentGlobal = [this.current, this.currentDeca, this.currentHecta]; 

        //We update the object game.render
    }

    Cicle.prototype.action = function(action){

        if(action == 'clear'){this.clear();}
        if(action == 'set'){this.set();}

    }

    Cicle.prototype.set = function(){
        this.controller = setInterval(cicleUpdate, 100); 
    }

    Cicle.prototype.clear = function(){
        clearInterval(this.controller);
    }
    

}

function Player(){

    this.hearts = 6;
    this.stars = 0;
    this.name = 'unknown';
    this.money = 0;

    this.setHearts = function(quantity = 1){
        this.hearts+=quantity; 
        return this.hearts;
    }

}

function RenderComponent(gameState, component){

    this.state = 'true';
    this.memory = gameState; 
    this.component = component;

    this.setMemory = function(gameState){
        this.memory = gameState;
    }

}



var game = new Game;
var renderPrint = new RenderComponent; 


