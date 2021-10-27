// Math operators
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function (a, operator, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
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

