function functionName(parameter1, parameter2) {
    //codes or statements to be executed
}

/*defining function*/
function writeText(str){
    document.getElementById("demo").innerHTML = str;
}

/*calling function*/
writeText("Hello World!");

//function task
function addNumbers(num1, num2){
    const sum = num1 + num2;
    document.getElementById("demo").innerHTML = sum;
}
addNumbers(1, 2);

//return statement
function addNumbers(num1, num2){
    const sum = num1 + num2;
    return sum
}
/*the function caller*/
document.getElementById("demo").innerHTML =
  addNumbers(5, 6);

/*alt. function caller*/
document.write(addNumbers(5, 6));

//assigning return values to a variable
function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}
const fullName = getFullName("John", "Doe");
document.write(fullName);