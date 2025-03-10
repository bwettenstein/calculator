class Calculator {
    constructor(previousOutputText, currentOutputText) {
        this.previousOutputText = previousOutputText;
        this.currentOutputText = currentOutputText;
        this.clear();
    }

    clear() {
        this.currentOutput = '';
        this.previousOutput = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOutput = this.currentOutput.toString().slice(0, -1);
    }

    replaceNumber(number) {
        // Prevent decimals from being displayed multiple times
        if (number === '.' && this.currentOutput.includes('.')) return
        this.currentOutput = this.currentOutput.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOutput === '') return
        if (this.previousOutput !== '') {
            this.calculate()
        }
        this.operation = operation;
        this.previousOutput = this.currentOutput;
        this.currentOutput = '';
    }

    calculate() {
        let computation
        // Converts the previousOutput, which is a string, to a floating point
        const prev = parseFloat(this.previousOutput);
        const current = parseFloat(this.currentOutput);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+': 
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case '.':
               
            default:
                return;
        }
        this.currentOutput = computation;
        this.operation = undefined;
        this.previousOutput = '';
    }

    // Formats the display with commas and decimals (if applicable)
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`;
        } else {
          return integerDisplay
        }
      }

    updateDisplay() {
        this.currentOutputText.innerText = this.getDisplayNumber(this.currentOutput);
        if (this.operation != null) {
            this.previousOutputText.innerText = 
                this.getDisplayNumber(this.previousOutput) + this.operation;
        } else {
            this.previousOutputText.innerText = '';
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOutputText = document.querySelector('[data-previous-output]');
const currentOutputText = document.querySelector('[data-current-output]');

const calculator = new Calculator(previousOutputText, currentOutputText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.replaceNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.calculate();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})
