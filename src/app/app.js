//app.js takes control of the game function, after everything is already preloaded and setup, the system execute app.js so the game start working, the main functioning of the game is initialize in this file.
//Init.js takes cares of initialize all major variables, set all the reactive and the corresponding reaction, so the game can work just fine. After the init.js is executed

//We initialize the core objects of the game.
var game   = new Game;
var cicle  = new Cicle;
var player = new Player;
var scene  = new Scene;
var paint  = new Paint;
var render = new Render;
var client = new ClientController;
//---------

//initialize default assets
assets.set(ff.defaultAsset);

//------- WE SET ITEMS IN INVENTORY
for(let i = 0; i < 20 ; i++){
    scene.set('menu', game.assets[0].itemSet[i]);
}

//it setup all the scene, including reactions, and objects
scene.setup();

//turn on the cicle engine after everything is defined on the code
cicle.action('set');

