//single-line statement
document.getElementById("elem").innerHTML = "Hello, world!";

//two single-line statements
document.getElementById("firstElem").innerHTML = "Hello, world!";
document.getElementById("secondElem").innerHTML = "Hello, everyone!";

//spans multiple lines
document.getElementById("elem").innerHTML =
  "Hello, world!";

 //grouping javascript statements
 function myFunc(){
    document.getElementById("demo").innerHTML = "Hello, world!";
 } 

 //Javascript keywords
 function myFunc(){
    const text = "Hello, world!";
    document.getElementById("demo").innerHTML = text;
 }