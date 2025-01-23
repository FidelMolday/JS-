//using console
const x = 5;
const y = 5;
const sum = x+y;

console.log(sum);

//using dialog box
function myFunc(){
    const x = 5;
    const y = 5;
    const sum = x+y;

    alert(sum);
}

//writing to html elements
function myFunc(){
    const x = 5;
    const y = 5;
    const sum = x+y;

    document.getElementById("demo").innerHTML=sum;
}

//write to the browser window
function myFunc(){
    const x = 5;
    const y = 5;
    const sum = x+y;

    document.write(sum);
}