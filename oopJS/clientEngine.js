
//global object "client". control all client actions. 
function ClientController(){

    this.timeSpacing;
    this.maxQuantity;
    this.minQuantity; 
    this.quantity;
    this.totalQuantity;
    this.lastGeneration;

    this.maxPatience;
    this.minPatience;

    //random chance of generation after cooldown for generation is ended.
    this.random;
    this.randomChance;

    //whishes
    this.maxWishQuantity;
    this.minWishQuantity;
    this.wishSauce;

    //array with the list of active clients.
    this.list = [];

    ClientController.prototype.new = function(){

        //create a new client after making the evaluation, this is activated by the game cicle.

    }

    ClientController.prototype.evaluate = function(){
        //this evaluate if a new client can be generate
    }

}

function Client(){

    this.id; 
    this.level; 
    this.state = 'waiting'; 

    this.face;
    this.patience; 

    this.wish = new ClientWish;

    Client.prototype.generate = function(){

    }

}

function ClientWish(){

    this.list;
    this.state;

    ClientWish.prototype.generate = function(){

    }
}