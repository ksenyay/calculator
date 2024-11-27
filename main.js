
const button = document.querySelectorAll('.operand');
const input = document.querySelector('.text-display');

let number = '';

let firstNumber = 0;
let secondNumber = 0;

button.forEach (button => {
    button.addEventListener('click', () => {
        let number = button.textContent;
        if (input.textContent.length < 9) {
            if (input.textContent == 0) {
                input.textContent = '';
            }
            input.textContent += number;
        }
    })
})





