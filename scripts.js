let display = document.querySelector("#display");
console.log(display.innerHTML);
display.innerHTML = "0";
let equation = 0;
let firstNumber = 0;
let secondNumber = 0;
let result = 0;

document.querySelectorAll(".number").forEach(function(button) {
    button.addEventListener('click', numberInput);
}) 

function numberInput(e) {
    if (display.innerHTML == result){
        display.innerHTML = e.target.innerHTML;
    } else if (display.innerHTML === '0'|| display.innerHTML === firstNumber) {
        display.innerHTML = e.target.innerHTML;
    } else {
        if (display.innerHTML.length<7) {
            display.innerHTML += e.target.innerHTML;}
        }
}

document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener('click', operatorInput);
}) 

function operatorInput(e) {
    firstNumber = display.innerHTML;
    equation = display.innerHTML + e.target.innerHTML;
    console.log(equation, firstNumber);
    
}
document.querySelector("#equals").addEventListener('click', equals);
function equals(e) {
    secondNumber = display.innerHTML;
    equation = equation + secondNumber;
    console.log(equation, secondNumber);
    result = eval(equation);
    display.innerHTML = result;
    firstNumber=0;
    secondNumber=0;
    equation=0;
    return result;
}
    

document.querySelector("#cce").addEventListener('click', clear);
function clear() {
    display.innerHTML = "0";
    equation = "0";
    firstNumber = "0";
}