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

document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener('click', operatorInput);
}) 

document.querySelector("#equals").addEventListener('click', equals);

document.querySelector("#cce").addEventListener('click', start);

document.querySelector("#off").addEventListener('click', turnOff);

document.querySelector("#sq").addEventListener('click', sqRoot);

function numberInput(e) {
    if (display.innerHTML == result){
        display.innerHTML = e.target.innerHTML;
        result = 0;
    } else if (display.innerHTML === '0'|| display.innerHTML === firstNumber) {
        display.innerHTML = e.target.innerHTML;
    } else {
        if (display.innerHTML.length<7) {
            display.innerHTML += e.target.innerHTML;}
        }
}

function operatorInput(e) {
    firstNumber = display.innerHTML;
    equation = display.innerHTML + e.target.innerHTML;
    console.log(equation, firstNumber);
}

function equals() {
    secondNumber = display.innerHTML;
    equation = equation + secondNumber;
    result = eval(equation);
    let nextSymbol=result.toString().split('')[7]
    let lastSymbol=result.toString().split('')[6]
    if (result.toString().length>7) {
        if (nextSymbol<4) {
            result = parseFloat(result.toString().slice(0,7));
        } else {
            lastSymbol=parseInt(result.toString().split('')[6])+1;
            result = result.toString().slice(0,6) + lastSymbol;
        }            
    }
    display.innerHTML = result;
    firstNumber=0;
    secondNumber=0;
    equation=0;
    return result;
}

function start() {
    display.innerHTML = "0";
    equation = "0";
    firstNumber = "0";
    document.querySelectorAll("button").forEach( a => {
        a.removeAttribute('disabled');
    });
}

function turnOff() {
    display.innerHTML = '';
    equation = 0;
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    document.querySelectorAll("button").forEach( a => {
        a.setAttribute('disabled', true);
    });
    document.querySelector("#cce").removeAttribute('disabled');
}

function sqRoot() {
    result = Math.sqrt(display.innerHTML).toString().slice(0,7);
    display.innerHTML = result;
}