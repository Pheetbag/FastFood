//It have all the control over the render of all game. Its important to know, that render its just a visual representation of the gameState so no changes will be done from here, theonly calculations this engine does, is internal calculations for a better visual representation, but it doesnt have any repercution into the gameState, this kind of changes have to be done, in the game.state (not recommended) or using the setpropertys of the different objects we define, because this sets makes changes directly to the game state. 

function Render(){

    this.state = "true";
    this.print = new RenderPrint;
    this.memory = {

        print : this.print.memory,
        wish : 'hola' //ELIMINAR

    };

    Render.prototype.do = function(){
        //genera un render completo, no segmentado, de todo el juego
    }

}

function RenderPrint(){

    this.state = 'true';
    this.memory = {

        //save all gameStates for print in a memory
    
        hearts : [1,1,1,1,1,1], 
        stars : [0,0,0,0,0,0],
        money : 0,
    
    };

    RenderPrint.prototype.animate = function(element, gameState, type = 'default'){

        if(element == 'hearts'){

            if(type == 'default'){type = 'style';}

            if(type == 'update'){
                for (let i = 0; i < gameState.length; i++) {
                    //this set the update mode for all hearts.
                    game.object.hearts[i].style.backgroundImage = "url(" + game.component.heartsOn[gameState[i]] + ")";
                    //this heart was update, so set the update mode for individual hearts
                    if(gameState[i] != this.memory.hearts[i]){
                        game.object.hearts[i].style.backgroundImage = "url(" + game.component.heartsOn[3] + ")";
                    }
                }
            }
            else if(type == 'style'){
                for (let i = 0; i < gameState.length; i++) {
                    //this set the update mode for all hearts.
                    game.object.hearts[i].style.backgroundImage = "url(" + game.component.heartsOn[gameState[i]] + ")";
                }
            }
            else if(type == 'clear'){


                for (let i = 0; i < gameState.length; i++) {

                    let a = 3 + i;

                    //this delete the update mode
                    game.object.hearts[i].style.backgroundImage = "url(" + game.component.hearts[ gameState[i] ] + ")"; 
                }
            }


        }
        else if (element == 'stars'){

            if(type == 'default'){type = 'update';}

            if(type == 'update'){

                for (let i = 0; i < gameState.length; i++) {

                    //this set the update mode for all stars.
                    game.object.stars[i].style.backgroundImage = "url(" + game.component.starsOn[gameState[i]] + ")";   

                    //set the update mode for individual stars
                    if(gameState[i] != this.memory.stars[i]){
                        game.object.stars[i].style.backgroundImage = "url(" + game.component.starsOn[6] + ")";
                    }
                }

            }
            else if (type == 'styleIn'){

                //Style the rainbow animation in the game.

                for (let i = 0; i < gameState.length; i++) {

                    //set the rainbow for individual stars
                    if(gameState[i] != this.memory.stars[i]){

                        game.object.stars[i].classList.add('starRainbow');             

                    }

                }

            }
            else if (type == 'styleOut'){

                for (let i = 0; i < gameState.length; i++) {

                    //set the rainbow for individual stars
                    if(gameState[i] != this.memory.stars[i]){

                        game.object.stars[i].classList.add('starRainbow' + gameState[i]);

                    }

                 }
            }
            else if (type == 'clear'){

                for (let i = 0; i < gameState.length; i++) {

                    game.object.stars[i].style.backgroundImage = "url(" + game.component.stars[gameState[i]] + ")"; 

                    if(gameState[i] != this.memory.stars[i]){
                        game.object.stars[i].classList.remove('starRainbow');  
                        game.object.stars[i].classList.remove('starRainbow' + gameState[i]);
                    }
                }

            }
        }

    }


    //render hearts
    RenderPrint.prototype.hearts = function(gameState){

        //If memory is updated, no render needed.
        if(this.checkMemory('hearts', gameState)){ return; }

        let tempThis = this; 

        tempThis.animate('hearts', gameState, 'update');
        setTimeout(function(){tempThis.animate('hearts', gameState, 'clear');}, 100);
        setTimeout(function(){tempThis.animate('hearts', gameState, 'style');}, 200);
        setTimeout(function(){tempThis.animate('hearts', gameState, 'clear');}, 300);


        //update the memory heart partition to the current gameState
        this.updateMemory('hearts', gameState);

    }

    //render stars
    RenderPrint.prototype.stars = function(gameState){

        //If memory is updated, no render needed.
        if(this.checkMemory('stars', gameState)){ return; }

        let tempThis = this;
        if(!game.arrEqual(this.memory.stars, gameState, '>')){

            tempThis.animate('stars', gameState); 
            setTimeout(function(){tempThis.animate('stars', gameState,'styleIn');}, 300);
            setTimeout(function(){tempThis.animate('stars', gameState,'styleOut');}, 800);
            setTimeout(function(){tempThis.animate('stars', gameState,'clear');}, 1100);

            //update the memory heart partition to the current gameState
            setTimeout(function(){tempThis.updateMemory('stars', gameState);}, 1100);

        }else{

            tempThis.animate('stars', gameState); 
            setTimeout(function(){tempThis.animate('stars', gameState,'clear');}, 300);

            //update the memory heart partition to the current gameState
            this.updateMemory('stars', gameState);
        }

    }

    //render money
    RenderPrint.prototype.money = function(gameState){
        
        //If memory is updated, no render needed.
        if(this.checkMemory('money', gameState)){ return; }
    
            game.object.money.style.color = 'rgb(216, 57, 48)';

        if(this.memory.money > gameState){
            //LETRAS ROJAS
        }else{

        }

    }

    RenderPrint.prototype.checkMemory = function(partition, gameState){

        //Memory checks test for changes in the gameState compared to the last render memory saved.
        if(partition == 'hearts'){
            if(!game.arrEqual(gameState, this.memory.hearts)){ return false; /*no updated memory */}
        }
        else if(partition == 'stars'){
            if(!game.arrEqual(gameState, this.memory.stars)){ return false; /*no updated memory */}
        }
        else if(partition == 'money'){
            if(!game.arrEqual(gameState, this.memory.money)){ return false; /*no updated memory */}
        }
        else{ return true; }
    }

    RenderPrint.prototype.updateMemory = function(partition, gameState){

        if(partition == 'hearts'){
            this.memory.hearts = gameState; 
        }
        else if(partition == 'stars'){
            this.memory.stars = gameState; 
        }
        else if(partition == 'money'){
            this.memory.cash = gameState;
        }
    }

}

