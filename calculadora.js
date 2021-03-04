var input_box = document.getElementById("calculation");

function UserClickButton(input){

    var oldinput = input_box.value;
    var newinput = oldinput + " " + input;
    input_box.value = newinput; 
    //console.log(input);
}

function CalculateValue(){    
var input = input_box.value;    
var result = eval(input);
input_box.value = result; 
}

function ClearData(){
    
    input_box.value ="";
}