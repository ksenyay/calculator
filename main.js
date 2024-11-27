
const button = document.querySelectorAll('.operand');
const input = document.querySelector('.text-display');
const clearButton = document.querySelector('.clear');
const floatButton = document.querySelector('.float');


let firstNumber = 0;
let secondNumber = 0;

// Numbers logic
button.forEach (button => {
    button.addEventListener('click', () => {
        let number = button.textContent;
        if (input.textContent.length < 9) {
            // Check if text is 0 and check if 0.5 values can be added
            if (input.textContent == 0 && input.textContent.length < 2) {
                input.textContent = '';
            }
            input.textContent += number;
        }
    })
})

// Clear all content
clearButton.addEventListener('click', () => input.textContent = 0)

// Float button logic
floatButton.addEventListener('click', () => {
    if (input.textContent.includes('.')) {
        return
    } else {
        input.textContent += '.';
    }
})

// Adding +/- symbols






