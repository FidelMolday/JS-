function getAge(age){
    const fullName = "John Doe";
    //the fullName variable can be used here
    document.getElementById("demo").innerHTML =
    fullName + " is " + age + " years old.";
}
//the fullName variable cannot be used here
document.getElementById("demo1").innerHTML =fullName;

//Global variables 
const fruit = "apple";

function myFunc() {
    document.getElementById("demo").innerHTML = 
    "My favorite fruit is " + fruit;
}

//coverting kilometer to miles
function toMiles(kilometer){
    const miles = kilometer * 0.62137;
    return kilometers + " kilometer/s " + "equals" + miles + " miles.";
}
//we can use the function as many times as we can
alert(toMiles(3));
document.getElementById("demo").innerHTML = toMiles(10);