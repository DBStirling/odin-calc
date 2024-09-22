var num1, operator, num2;
var calcString = '';


// adding inputs to string
const btns = document.querySelectorAll('button[id^=but')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        calcString += btn.innerHTML;
        editDisplay(calcString);
    });
});

// clear button functionality
const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    editDisplay('');
    calcString = '';
})


// equal button functionality

const equals = document.querySelector('#equals')

equal.addEventListener('click', () => {
    runCalculation(calcString);
})


const display = document.querySelector('.display');

function editDisplay(string) {
    display.textContent = '';
    display.textContent = string;
}

function runCalculation(string) {

    operatorIndex = getOperator(string);

    // assigning the numbers and operator to variables
    num1 = string.slice(0, operatorIndex);
    operator = string[operatorIndex];
    num2 = string.slice(operatorIndex+1);

    let answer = calculate(num1, operator, num2);
    editDisplay(answer);

    return answer;
};

function getOperator(string) {

    let operatorIndex;
    for (let i = 0; i <string.length; i++) {
        if (string[i] == '+' || string[i] == '-' || string[i] == 'x' || string[i] == '/')
        operatorIndex = i;
    }
    // console.log(operatorIndex);
    if (operatorIndex == undefined) {
        editDiaplay('Cannot calculate. No operator!');
        calcString = '';
        return;
    }
    return operatorIndex;
};

function calculate(num1, operator, num2) {
    if (operator == '+') return add(num1, num2);
    else if (operator == '-') return subtract(num1, num2);
    else if (operator == 'x') return multiply(num1, num2);
    else if (operator == '/') return divide(num1, num2);
    else {
        calcString = '';
        editDiplay("operator not recognized");
        return;
    }
};

function add(a, b) {
    x = Number(a);
    y = Number(b);
    return x + y;
};

function subtract(a,b) {
    x = Number(a);
    y = Number(b);
    return x - y;
};

function multiply(a,b) {
    x = Number(a);
    y = Number(b);
    return x * y;
};

function divide(a,b) {
    x = Number(a);
    y = Number(b);
    return x / y;
};