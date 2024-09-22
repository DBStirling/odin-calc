var num1, operator, num2;
var calcString = '';


// adding inputs to string
const btns = document.querySelectorAll('button[id^=but')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        calcString += btn.innerHTML;
        console.log(calcString);
    });
});

// clear button functionality
const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    calcString = '';
    console.log(calcString)
})


// equal button functionality

const equals = document.querySelector('#equals')

equal.addEventListener('click', () => {
    runCalculation(calcString);
})

function runCalculation(string) {

    operatorIndex = getOperator(string);

    num1 = string.slice(0, operatorIndex);
    operator = string[operatorIndex];
    num2 = string.slice(operatorIndex+1);

    console.log(num1)
    console.log(operator)
    console.log(num2)



    // let answer = calculate(num1, operator, num2);
};

function getOperator(string) {

    let operatorIndex;
    for (let i = 0; i <string.length; i++) {
        if (string[i] == '+' || string[i] == '-' || string[i] == 'x' || string[i] == '/')
        operatorIndex = i;
    }
    console.log(operatorIndex);
    if (operatorIndex == undefined) {
        console.log('Cannot calculate. No operator!')
        calcString = '';
        return;
    }
    return operatorIndex;
}

// function calculate(num1, operator, num2) {
//     if (operator == '+') return add(num1, num2);
//     else if (operator == '-') return subtract(num1, num2);
//     else if (operator == 'x') return multiply(num1, num2);
//     else if (operator == '/') return divide(num1, num2);
//     else {
//         console.log("operator not recognized");
//         calcString = ''
//         return;
//     }
// }





function add(a, b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};