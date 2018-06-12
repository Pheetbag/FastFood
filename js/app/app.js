//app.js takes control of the game function, after everything is already preloaded and setup, the system execute app.js so the game start working, the main functioning of the game is initialize in this file.
//Init.js takes cares of initialize all major variables, set all the reactive and the corresponding reaction, so the game can work just fine. After the init.js is executed


//We initialize the core objects of the game.
var game   = new Game;
var cicle  = new Cicle;
var player = new Player;
var scene  = new Scene;
var paint  = new Paint;
var render = new Render;

//---------

//All of this will be move to a setup method in the game object, in the core, so whe do not use the open namespace.

var xMap = [
    {x: 'div'},
    {x: 'div'},
    {x: 'div'},
    {x: 'div'},
    {x: 'div'},
    {x: 'div'}
];
flexbones(xMap).sketch().contextualize('.ff-gamePrint-hearts, .ff-gamePrint-stars').bind();

var xMap = [
    {x:'div'},
    {x:'span'}
];
flexbones(xMap).sketch().contextualize('.ff-gamePrint-money').bind(); 

/*
OLD METHOD USING PAINT
sketch  = paint.sketch(['div', 'div', 'div', 'div', 'div', 'div']);
context = paint.getContext('ff-gamePrint-hearts');
paint.draw(sketch, context);
context = paint.getContext('ff-gamePrint-stars');
paint.draw(sketch, context);


//---------*
sketch  = paint.sketch(['div', 'span']);
context = paint.getContext('ff-gamePrint-money');
paint.draw(sketch, context);
*/

//------REACT FOR THE MENU



var react = react('click');
var context = paint.getContext('ff-gameMenu-slot');

for(let i = 0; i < context.length; i++){

    reactive('mousedown')
    .do(() => {

        //The reaction of the reactive, it can the reaction of its reactTree setting "true" after the definition of the function.

    }, true)
    .use(context[i])
    .add(react)

}
/*     

OLD REACT SYNTAX
MENU SLOTS 

react = new ReactTree;
react.reactionary = 'click';
react.reaction = function(){}
context = paint.getContext('ff-gameMenu-slot');

for(let i = 0; i < context.length; i++){
reactive = new Reactive;
reactive.reactionary = 'mousedown';
reactive.reaction = function(reactive){
    player.set('hand', reactive);
    console.info(scene.menu[reactive.context.dataset.id]);
}
reactive.context = context[i];
react.append(reactive);
}

 */
//---HOVER
for(let i = 0; i < context.length; i++){
    reactive = new Reactive;
    reactive.reactionary = 'mouseenter';
    reactive.reaction = function(reactive){
        let context = reactive.context;
        let showboxContext = context.children[0];

        sketch = paint.sketch(['div']);
        paint.stroke(sketch, [['class', 'showBox']]);
        console.log(sketch);
        sketch[0].innerHTML = context.dataset.name + '       ' + context.dataset.desc;
        paint.erase([showboxContext]);
        paint.draw(sketch, [showboxContext]);
    }
    reactive.context = context[i];
    react.append(reactive);
}

for(let i = 0; i < context.length; i++){
    reactive = new Reactive;
    reactive.reactionary = 'mouseleave';
    reactive.reaction = function(reactive){
        let context = reactive.context;
        let showboxContext = context.children[0];
        paint.erase([showboxContext]);
    }
    reactive.context = context[i];
    react.append(reactive);
}

//---DELETE BTN
reactive = new Reactive;
reactive.reaction = function(reactive){
    player.set('hand', 'delete');
    console.log('delete action');

}
reactive.context = paint.getContext('ff-gameMenu-delete')[0];
react.append(reactive);


//initialize default assets
assets.set(ff.defaultAsset);

//------- WE SET ITEMS IN INVENTORY
for(let i = 0; i < 20 ; i++){
    scene.set('menu', game.assets[0].itemSet[i]);
}


//turn on the cicle engine after everything is defined on the code
cicle.action('set');
