
function Game(){

    //game level
    this.level;

    this.state = {

        player: {

            hearts: 6,
            stars: 0,
            money: 0,

        },

        render: {

            print: {

                hearts: [1,1,1,1,1,1],
                stars : [0,0,0,0,0,0],
                money: 0,

            }
        }

    };

    //game cicles
    this.cicle = new Cicle;

    //game objects
    this.object = new Object; 

    //game components
    this.component = new Component; 

    //this.render = render.do();

    Game.prototype.over= function(){

        alert('you lost'); 

    } 

    //ramdom values
    Game.prototype.random = function(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}

    //array compare
    Game.prototype.arrEqual = function(a,b, type = 'Equal'){

        if(type == 'Equal'){

            if(a.length != b.length){
                return false;
            }

            for (let i = 0; i < a.length; i++) {
                
                let tempArr1 = a[i];
                let tempArr2 = b[i];

                if(tempArr1 != tempArr2){return false;}
                
            }


            return true; 
        }
        else if (type == '>'){

            let tempArr1 = 0;
            let tempArr2 = 0;

            for (let i = 0; i < a.length; i++) {
                
                tempArr1 += a[i];
                tempArr2 += b[i];

                if(tempArr1 > tempArr2){return true;}
                
            }  

        
            return false;

        }

    }
}




function Player(){

    this.hearts = 6;
    this.stars = 0;
    this.name = 'unknown';
    this.money = 0;

    Player.prototype.set = function(type, quantity = 1, strict = false){

        if(type == 'hearts'){

            //update the hearts property
                //We check for strict mode, if strict mode is not activated, then quantity is the number of hearts to be add or taken, from the current hearts quantity, if strict mode is activated, then quantity is the number of hearts to be set, deleting the before state.
            if(strict == false){   this.hearts += quantity; }
            else if (strict == true){   this.hearts = quantity; }

            //update the game state to the new gameState, to be rendered. 
                //clean up the gamestate for the update
            game.state.render.print.hearts = [0,0,0,0,0,0]; 
            let tempPointer = 0;

            for (let i = 0; i < this.hearts; i++) {
                
                game.state.render.print.hearts[tempPointer]++; 
                
                tempPointer++;  
                
                if(tempPointer == 6){ tempPointer = 0; }

            }

            game.state.player.hearts = this.hearts;

            return this.hearts;
        }
        else if (type == 'stars'){

            //update the stars property
                //We check for strict mode, if strict mode is not activated, then quantity is the number of stars to be add or taken, from the current stars quantity, if strict mode is activated, then quantity is the number of stars to be set, deleting the before state.   
            if(strict == false){   this.stars += quantity; }
            else if (strict == true){   this.stars = quantity; }     

            //update the game state to the new gameState, to be rendered. 
                //clean up the gamestate for the update
                game.state.render.print.stars = [0,0,0,0,0,0]; 
                let tempPointer = 0;
    
                for (let i = 0; i < this.stars; i++) {
                    
                    game.state.render.print.stars[tempPointer]++; 
                    
                    tempPointer++;  
                    
                    if(tempPointer == 6){ tempPointer = 0; }
    
                }

                game.state.player.stars= this.stars;

                return this.stars;

        }


    }

}




function Cicle(){
    
    this.current = 0;
    this.currentDeca = 0;
    this.currentHecta = 0;
    this.currentGlobal = [this.current, this.currentDeca, this.currentHecta];

    this.controller = setInterval(cicleUpdate, 100); 
    this.state = 'on';

    Cicle.prototype.update = function(){

        //define a new cicle execution
        this.current++;
        this.currentDeca = Math.trunc(this.current/10);
        this.currentHecta = Math.trunc(this.current/1000); 
        this.currentGlobal = [this.current, this.currentDeca, this.currentHecta]; 

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
