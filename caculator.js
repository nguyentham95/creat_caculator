function Add() {
     let number1 = +document.getElementById("num1").value;
     let number2 = +document.getElementById("num2").value;
     let sum = number1 + number2;
    let result = "Result Addition(+): "  + sum;
   document.getElementById("result").innerHTML = result;

 }
 function sub() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let sub = number1 - number2;
    let result = "Result Subtraction(-): "  + sub;
 document.getElementById("result").innerHTML = result;
}

function multi() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let multi = number1 * number2;
    let result = "Result Multiplication(x): "  + multi;
 document.getElementById("result").innerHTML = result;
}
function div() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let div = number1 / number2;
    let result = "Result Devision(/): "  + div;
document.getElementById("result").innerHTML = result;
}
