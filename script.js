const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

// Add event listeners for numbers, operators, decimals buttons
inputBtns.forEach(btn => {
    if (btn.classList.length === 0) {
        btn.addEventListener('click', () => sendNumberValue(btn.value));
    } else if (btn.classList.contains('operator')) {
        btn.addEventListener('click', () => sendNumberValue(btn.value));
    } else if (btn.classList.contains('decimal')) {
        btn.addEventListener('click', () => sendNumberValue(btn.value));
    }
});