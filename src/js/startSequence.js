//This start the whole game engine (previous the reset sequence, for "play again" mode.

function startGame(){

    //Close startwindow
    document.getElementById('startWindow').style.display = 'none'; 
    
    //get userName
    initName = document.getElementById('inputUser').value;
    if(
        initName == ''|| initName == ' ' || initName == '  ' || initName == '   ' || initName == '    ' || initName == '     ' || initName == '      ' || initName == '       ' || initName == '        '
    ){
        initName = 'Unknown';
    }

    //start all initial renders.
    render_printHeart();
    render_printStar();
    render_printName(initName);
    render_printCash();

    //start gameCicle engine.
    gameCicle_controller = setInterval('gameCicle()', 100);
}

//gameCicle is the function triggered by the gameCicles, the gameCicles is the way for the game to make time updates, and time calculations under the same base. The game makes 10cps(cicles per second), making a precision of 0.1 second, for any engine based on his update.

//for making better code maintenance, any (or as many as possible) updates (render updates, and code updates) will fall on gameCicle, setting a centraliced place for updates to be tracked.
//TODO[!] Move those update engines in the future to here.

function gameCicle() {

    //This increment the currentGameCicle variable.
    //TODO on the future its going to be defined other varibles of currentGameCicle, currentGameCicle_deca that increases in 1 everytime 10 cicles goes(1sec), and currentGameCicle_hecta for 100 cicles (10sec).
    currentGameCicle++;

    //update renders in every cicle

        //prints
    render_printHeart();
    render_printStar();
    render_printCash();

        //clients
    render_client();
    render_clientPatience();

    //this start the clientEngine in every cicle trying to generate anew client if possible, in clientGenerationEngine.js
    clientAction_create();
    clientAction_patience();
}

