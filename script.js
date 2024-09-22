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

clear.addEventListener('clear', () => {
    calcString = '';
})











function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}