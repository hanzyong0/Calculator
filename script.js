let x = null;
let y = null;
let operator = null;

// Operate function
const operate = function (x, y, operator) {
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
            a = e.target.value;
        } else {
            a = parseInt(e.target.value, 10);
        };
        display.textContent += a + ' ';
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
    if (operator !== null) {
        answer = operate(x, y, operator);
        display.textContent = answer;
    } else {
        display.textContent = '0';
    }
});

// Operator buttons functions
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (operator === null) {
            operator = e.target.value;
        } else {
            answer = operate(x, y, operator);
            display.textContent = answer;
            operator = e.target.value;
        };
    });
});

