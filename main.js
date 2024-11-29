
const button = document.querySelectorAll('.operand');
const input = document.querySelector('.text-display');
const clearButton = document.querySelector('.clear');
const floatButton = document.querySelector('.float');
const negativeButton = document.querySelector('.negative');
const operatorButton = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const percentageButton = document.querySelector('.percentage');

let currentNumber = '';
let previousNumber = null;
let currentOperator = null;
let shouldClearDisplay = false;


// Entering numbers logic
button.forEach (button => {
    button.addEventListener('click', () => {
        let number = button.textContent;
        if (input.textContent.length < 9) {
            // Check if text is 0 and check if 0.5 values can be added
            if (input.textContent == 0 && input.textContent.length < 2) {
                currentNumber = '';
            }
            // Clearing display on second number
            if (shouldClearDisplay) {
                currentNumber = '';
                shouldClearDisplay = false;
            }
            currentNumber += number;
            input.textContent = currentNumber; // update display
        }       
    })
})

// Clear all content
clearButton.addEventListener('click', () => {
        input.textContent = 0;
        currentNumber = '';
        previousNumber = null;
        currentOperator = null;
})

// Float button logic
floatButton.addEventListener('click', () => {
    if (input.textContent.includes('.')) {
        return;
    } else if (input.textContent == 0) {
        currentNumber = '0.';
        input.textContent = currentNumber; 
    } else {
        currentNumber += '.';
        input.textContent = currentNumber; 
    }
})

// to handle calculation if pressed the operator for the second time
operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {

        let operator = operatorButton.textContent;   
    
        if (currentNumber === '') return;
        if (previousNumber !== null && currentOperator !== null) {
            currentNumber = operate(previousNumber, currentNumber, currentOperator);
            input.textContent = currentNumber; // update display
        }
        previousNumber = currentNumber;
        currentOperator = operator;
        shouldClearDisplay = true;
    })
})

// Handle equals
equalsButton.addEventListener('click', () => {
    if (currentNumber === '') return;
    if (previousNumber !== null && currentOperator !== null) {
        currentNumber = operate(previousNumber,currentNumber,currentOperator);
        input.textContent = currentNumber;
    }
    currentOperator = null;
})

// Handle calculation
function operate(x, y, operator) {
    
    let xPerc = x;
    let yPerc = y;

    if (yPerc.includes('%')) {
        percentageResult = calculatePercentage(xPerc,yPerc,operator);
        return percentageResult;
    } else {

        x = Number(x);
        y = Number(y);
    
        if (operator == '+') {
            return x + y;  
        } else if (operator == '-') {
            return x - y;
        } else if (operator == '/') {
            return x / y;
        } else if (operator == '*') {
            return x * y;
        }
    }
}

// Adding +/- symbols
negativeButton.addEventListener('click', () => {
    
    if (currentNumber.includes('-')) {
        let deletedMinus = currentNumber.replace('-','');
        currentNumber = deletedMinus;
        input.textContent = currentNumber;
    } else if (!currentNumber.includes('-') && currentNumber != 0) {
        let insertedMinus = '-' + currentNumber;
        currentNumber = insertedMinus;
        input.textContent = currentNumber; 
    }
})

// Adding % symbol
percentageButton.addEventListener('click', () => {
    if (previousNumber != null) {
        currentNumber = currentNumber + '%';
        input.textContent = currentNumber;
    }
})

// Calculate percentage
function calculatePercentage(x,y,operator) {

    let stringY = y.replace('%','');
    let stringX = x;

    let numberX = Number(stringX);
    let numberY = Number(stringY);

    let percentageY = numberY/100
    let percentage = percentageY * numberX

    if (operator == '+') {
        return numberX + percentage;  
    } else if (operator == '-') {
        return numberX - percentage;
    } else if (operator == '/') {
        return numberX / percentage;
    } else if (operator == '*') {
        return numberX * percentage;
    }
}