 //changing content of html
 function myFunc(){
    document.getElementById("demo").innerHTML = "Hello Everyone!";
 }

//change values of attributes
 function myFunc(){
    document.getElementById("image").src = "images/star.png";
 }

//change the styling
function myFunc(){
    document.getElementById("demo").style.color = "green";
    document.getElementById("demo").style.fontWeight = "bold";
    document.getElementById("demo").style.fontSize = "300%";
}

//Changing HTML styles
function show(){
    document.getElementById("demo").style.display = "block";
}
function hide(){
    document.getElementById("demo").style.display = "none";
}