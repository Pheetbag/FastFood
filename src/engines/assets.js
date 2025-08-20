var assets = new Assets;

function Assets(){

   this.uID = 0;
   this.setuID = function(){ return this.uID++; }

   this.object = function(itemSet, textureMap = [], clientSet = []){

    this.itemSet    = itemSet;
    this.textureMap = textureMap;
    this.clientSet  = clientSet;
   }

   this.item = function(extID){

      this.uID   = assets.setuID();
      this.extID = extID;

      this.name  = 'unnamed';
      this.desc  = '';
      this.cost  = 0;
      this.price = 0;

      this.type = 'food';
      this.texture = extID;
      this.ico;

      this.consumable = false;
   }

   this.textureMap = function(){

      this.item   = [];
      this.client = [];
   }

   this.set = function(asset){

    game.assets.push(asset);
  }
}






















function Objects(){

    //miscelaneous
    this.pause = document.getElementById('ff-gameComponentPause');
    this.start = document.getElementById('ff-startButton');

    //prints
    this.hearts = [
        document.getElementById('ff-gamePrint-heart1'),
        document.getElementById('ff-gamePrint-heart2'),
        document.getElementById('ff-gamePrint-heart3'),
        document.getElementById('ff-gamePrint-heart4'),
        document.getElementById('ff-gamePrint-heart5'),
        document.getElementById('ff-gamePrint-heart6')
    ];
    this.stars = [
        document.getElementById('ff-gamePrint-star1'),
        document.getElementById('ff-gamePrint-star2'),
        document.getElementById('ff-gamePrint-star3'),
        document.getElementById('ff-gamePrint-star4'),
        document.getElementById('ff-gamePrint-star5'),
        document.getElementById('ff-gamePrint-star6')
    ];
    this.name = document.getElementById('ff-gamePrint-Name');
    this.money = document.getElementById('ff-gamePrint-Cash');


}

function Component(){

    //hearts
    this.hearts = [
        "resources/gameGeneral_ico/heart_dead.png",
        "resources/gameGeneral_ico/heart_active.png",
        "resources/gameGeneral_ico/heart_extra.png"
    ];

    //hearts on
    this.heartsOn = [
        "resources/gameGeneral_ico/heart_dead_On.png",
        "resources/gameGeneral_ico/heart_active_On.png",
        "resources/gameGeneral_ico/heart_extra_On.png",
        "resources/gameGeneral_ico/heart_On.png"
    ];

    //stars
    this.stars = [
        "resources/gameGeneral_ico/star0.png",
        "resources/gameGeneral_ico/star1_black.png",
        "resources/gameGeneral_ico/star2_black.png",
        "resources/gameGeneral_ico/star3_black.png",
        "resources/gameGeneral_ico/star4_black.png",
        "resources/gameGeneral_ico/star5_black.png",
    ];

    //stars on
    this.starsOn = [
        "resources/gameGeneral_ico/star0_border.png",
        "resources/gameGeneral_ico/star1_border.png",
        "resources/gameGeneral_ico/star2_border.png",
        "resources/gameGeneral_ico/star3_border.png",
        "resources/gameGeneral_ico/star4_border.png",
        "resources/gameGeneral_ico/star5_border.png",
        "resources/gameGeneral_ico/starWhite.png",
    ];

    //stars rainbow
    this.starsRainbow = [
        "resources/gameGeneral_ico/starWhite_Rainbow0.png",
        "resources/gameGeneral_ico/starWhite_Rainbow1.png",
        "resources/gameGeneral_ico/starWhite_Rainbow2.png",
        "resources/gameGeneral_ico/starWhite_Rainbow3.png",
        "resources/gameGeneral_ico/starWhite_Rainbow4.png",
        "resources/gameGeneral_ico/starWhite_Rainbow5.png",
        "resources/gameGeneral_ico/starWhite_Rainbow0.png",
    ];

    //food
    this.food = {

        default : [

        ] ,

    }


    //food for his display in the client wishes (if false it will inherit from the normal display)
}
