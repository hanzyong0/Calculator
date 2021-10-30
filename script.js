const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#operate');
const dotButton = document.querySelector('#dot');
const backspace = document.querySelector('#backspace');

let x = null;
let y = null;
let operator = null;
dotButton.disabled = false;

// Operate function
const operate = function (x, y, operator) {
    x = parseFloat(x, 10);
    y = parseFloat(y, 10);
    if (operator === '+') {
        return Math.round((x + y) * 100) / 100;
    } else if (operator === '-') {
        return Math.round((x - y) * 100) / 100;
    } else if (operator === '*') {
        return Math.round((x * y) * 100) / 100;
    } else if (operator === '/') {
        if (y === 0) {
            return 'error';
        } else {
            return Math.round((x / y) * 100) / 100;
        };
    };
};

// Update display when buttons clicked
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        a = e.target.value;
        display.textContent += a;
    });
});

// Clear button
clear.addEventListener('click', () => {
    location.reload();
});

// "=" key operate
equals.addEventListener('click', () => {
    if (x !== null && y !== null && operator !== null) {
        answer = operate(x, y, operator);
        display.textContent = answer;
    } else {
        display.textContent = '0';
    };
    x = null;
    y = null;
    operator = null;
    dotButton.disabled = false;
});

// Operator buttons functions
operatorButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (x === null && (e.target.value === '-' || e.target.value === '+')) {
            x = e.target.value;
            display.textContent = x;
        } else if ((x === '-' || x === '+') && y === null && operator === null) {
            display.textContent = e.target.value;
        } else if (x !== null && y === null && operator === null) {
            operator = e.target.value;
            display.textContent += ' ' + operator + ' ';
        } else if (operator !== null) {
            answer = operate(x, y, operator);
            display.textContent = answer;
            operator = e.target.value;
            display.textContent += ' ' + operator + ' ';
            x = answer;
            y = null;
        };
    });
});

// Function for x
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (x === null && y === null && operator === null) {
            x = e.target.value;
        } else if (x !== null && y === null && operator === null) {
            x += e.target.value;
        };
        if (x.includes('.')) {
            dotButton.disabled = true;
        } else if (!x.includes('.')) {
            dotButton.disabled = false;
        };
    });
});

// Function for y
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (x !== null && y === null && operator !== null) {
            y = e.target.value;
        } else if (x !== null && y !== null && operator !== null) {
            y += e.target.value;
        };
        if (y.includes('.')) {
            dotButton.disabled = true;
        } else if (!y.includes('.')) {
            dotButton.disabled = false;
        };
    });
});

// Backspace button function
backspace.addEventListener('click', () => {
    if (x !== null && y === null && operator === null) {
        x = x.slice(0, x.length - 1);
        if (x.length === 0) {
            x = null;
        };
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    } else if (x !== null && y === null && operator !== null) {
        operator = operator.slice(0, operator.length - 3);
        operator = null;
        display.textContent = display.textContent.slice(0, display.textContent.length - 3);
    } else if (x !== null && y !== null && operator !== null) {
        y = y.slice(0, y.length - 1);
        if (y.length === 0) {
            y = null;
        };
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    };
    if (!x.includes('.')) {
        dotButton.disabled = false;
    } else if (!y.includes('.')) {
        dotButton.disabled = false;
    };
});

