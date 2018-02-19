
var formulario = document.getElementById('formulario');

function chequeaNumeros(){
    if(formulario !== null){
        setNumbers();
    }
}

function setNumbers() {
    
var value1 = document.getElementById('cimg1').childNodes[0];
var value2 = document.getElementById('cimg2').childNodes[0];
var value3 = document.getElementById('cimg3').childNodes[0];
var value4 = document.getElementById('cimg4').childNodes[0];

var number1;
var number2;
var number3;
var number4;

var finalNumber;

    for (i = 1; i <= 9; i++){
        
        var compare1 = 'images/capchs/'+i+'.png';
        
        var compare2 = value1.getAttribute('src');

        if(compare1 == compare2){
            number1 = i;
            break;
        }
    }

    //----

    for (i = 1; i <= 9; i++) {
        
        var compare1 = 'images/capchs/'+i+'.png';
        
        var compare2 = value2.getAttribute('src');

        if(compare1 == compare2){
            number2 = i;
            break;
        }
        
    }

    //----

    for (i = 1; i <= 9; i++) {
        
        var compare1 = 'images/capchs/'+i+'.png';
        
        var compare2 = value3.getAttribute('src');

        if(compare1 == compare2){
            number3 = i;
            break;
        }
    }

    //----

    for (i = 1; i <= 9; i++) {
        
        var compare1 = 'images/capchs/'+i+'.png';
        
        var compare2 = value4.getAttribute('src');

        if(compare1 == compare2){
            number4 = i;
            break;
        }
    }
    finalNumber = number1.toString() + number2.toString() + number3.toString() + number4.toString();
    
    formulario.value = finalNumber;
    //dosub();
}


var interval = setInterval('chequeaNumeros()',1);
