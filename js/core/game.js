//any variable of function we want to create native, should be defined in this object so we dont touch the global namespaces
var ff = new Object();

function Game(){

    this.level;

    this.state = {

        player: {

            hearts : 6,
            stars  : 0,
            money  : 0,
            name   : 'unknown',
            hand   : []
        },

        scene: {
            menu: [],
            hand: []
        }

    };

    this.assets = {

      itemSet    : [],
      textureMap : [],
      playsound  : []
   }

   this.assets = [];

    this.component = new Component;

    Game.prototype.over = function(){

        alert('you lost');

    }
}


function Scene(){

    this.menu = [];
    this.hand = [];

    this.set = function(type, value){

        this.menu.push(value);
        //update the gamestate;
        game.state.scene.menu = this.menu;
    }
}
