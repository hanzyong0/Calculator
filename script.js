let x = null;
let y = null;
let operator = null;

// Operate function
const operate = function (x, y, operator) {
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    if (operator === '+') {
        return x + y;
    } else if (operator === '-') {
        return x - y;
    } else if (operator === '*') {
        return x * y;
    } else if (operator === '/') {
        if (y === 0) {
            return 'error';
        } else {
            return x / y;
        };
    };
};

// Update display when buttons clicked
const display = document.querySelector('#display');

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        if (isNaN(e.target.value)) {
            a = ' ' + e.target.value + ' ';
        } else {
            a = e.target.value;
        };
        display.textContent += a;
    });
});

// Clear button
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    location.reload();
});

// "=" key operate
const equals = document.querySelector('#operate');

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
});

// Operator buttons functions
const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (operator === null) {
            operator = e.target.value;
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

// Number buttons functions
const numberButtons = document.querySelectorAll('.number');

// Function for x
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (x === null && y === null && operator === null) {
            x = e.target.value;
        } else if (x !== null && y === null && operator === null) {
            x += e.target.value;
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
    });
});