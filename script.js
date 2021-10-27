// Math operators
const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const multiply = function (x, y) {
    return x * y;
};

const divide = function (x, y) {
    if (y === 0) {
        return error;
    } else {
        return x / y;
    };
};

const operate = function (x, y, operator) {
    if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x, y);
    } else if (operator === '*') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
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

