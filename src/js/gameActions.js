//Game actions are the main controllers of any engine, everything thats not active by the startsequence will have to be active by an game action.

function clientAction_create(){
    
    //evaluate if a new client can be create. do it if true.
    if(evaluate_clientGeneration() == true){
        generateClient(); 
        toRender_client = true;
    }

}

function clientAction_delete(client){

    deleteClient(client);

}

function clientAction_patience(){

    //check for every client patience for update
    for (let i = 0; i < 4; i++) {

        //verify is client patience is defined
        if(client_patienceSet[i] !== false){
            //update the actual patience
            client_patienceActual[i]--;
            
            //if after the update the client do not have anymore patience, delete it
            if(client_patienceActual[i] == 0){clientAction_delete(i);}
            toRender_patience = true;
        }
    }

}

function gameAction_pause(){

    clearInterval(gameCicle_controller);
}

function gameAction_play(){
    gameCicle_controller = setInterval('gameCicle()', 100);
}