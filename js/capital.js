/*console.log("is this working??");*/

var button;
var capInput;
var btn = "submit";
/*var colorSwitch = fill(255,190,190);*/

function setup(){
    var cnv = createCanvas(950,500);
    cnv.parent('sketch-holder');
    
    background(211,211,211);
    
    button = select('#submit');
    capInput = select('#capital');
   
}

function buttonChange(){
    var number = capInput.value();
    var property = document.getElementById(btn);
    
    if (mouseIsPressed && number >= 10 && number <= 100){
        console.log("button pressed n shit");
        
        property.style.backgroundColor = "#706f6f";
        }
    else {
        property.style.backgroundColor = "transparent";
        /*console.log(property);*/
        }
    }

function draw(){
    fill(105,105,105);
    
    //Future Value
    ellipse(20, 10, 10, 0);
    ellipse(20, 15, 10, 0);
    ellipse(20, 20, 10, 0);
    
    //Value
    rect(15, 60, 10, 10)
    
    //Person
    ellipse(60, 60, 10, 10);
    ellipse(60, 70, 2, 20);
    arc(60, 90, 10, 20, PI,  TWO_PI);
    
    //Commodity
    ellipse(100, 73, 10, 10);
    
    //Markets
    /*triangle(120, 50, 115, 60, 125, 60);*/
    triangle(135, 70, 130, 80, 140, 80);
   /* triangle(120, 90, 115, 100, 125, 100);*/
    
    //New Value = Use + Exchange Value
    rect(160, 70, 10, 10);
    
    buttonChange();
    
    }