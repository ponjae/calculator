const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNext = false;

function sendNumberValue(number) {
    if (awaitingNext) {
        calculatorDisplay.textContent = number;
        awaitingNext = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    if (awaitingNext) return;
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if (!firstValue) {
        firstValue = currentValue;
    } else {

    }
    awaitingNext = true;
    operatorValue = operator;
}

// Add event listeners for numbers, operators, decimals buttons
inputBtns.forEach(btn => {
    if (btn.classList.length === 0) {
        btn.addEventListener('click', () => sendNumberValue(btn.value));
    } else if (btn.classList.contains('operator')) {
        btn.addEventListener('click', () => useOperator(btn.value));
    } else if (btn.classList.contains('decimal')) {
        btn.addEventListener('click', addDecimal);
    }
});

function resetAll() {
    calculatorDisplay.textContent = '0';
    firstValue = 0;
    operatorValue = '';
    awaitingNext = false;
}

clearBtn.addEventListener('click', resetAll);