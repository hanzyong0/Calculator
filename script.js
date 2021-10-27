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
    answer = operate(x, y, operator);
    display.textContent = answer;
});