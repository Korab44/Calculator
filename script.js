let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

let clearBtn = document.querySelector('.clear');
let operatorBtn = document.querySelectorAll('.operator');
let numBtn = document.querySelectorAll('.number');
let btn = document.querySelector('.button');
let equalBtn = document.querySelector('.equal');
let currentOperand = document.querySelector('.current-operand');
let previousOperand = document.querySelector('.previous-operand');


currentOperand.textContent = '';
previousOperand.textContent = '';

function resetScreen() {
    currentOperand.textContent = ''
    shouldResetScreen = false
  }

function appendNumber(number) {
    if (currentOperand.textContent === '0' || shouldResetScreen)
      resetScreen();
    currentOperand.textContent += number.value;
  }
  numBtn.forEach((number) => {
    number.addEventListener('click', function() {
    appendNumber(number)
    })
    });
    function evaluate() {
        if (currentOperation === null || shouldResetScreen) return
        if (currentOperation === '/' && currentOperand.textContent === '0') {
          alert("You can't divide by 0!")
          return
        }
        secondOperand = currentOperand.textContent
        currentOperand.textContent = roundResult(
          operate(currentOperation, firstOperand, secondOperand)
        )
        previousOperand.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
        currentOperation = null
      }
    function setOperation(operator) {
        if (currentOperation !== null) evaluate()
        firstOperand = currentOperand.textContent
        currentOperation = operator
        previousOperand.textContent = `${firstOperand} ${currentOperation}`
        currentOperand.textContent = '';
        shouldResetScreen = true
      }
      function roundResult(number) {
        return Math.round(number * 1000) / 1000
      }

  operatorBtn.forEach((operator) => {
    operator.addEventListener('click', function() {
      setOperation(operator.textContent);
    })
  });

  equalBtn.addEventListener('click', function() {
    return evaluate();
  })

  clearBtn.addEventListener('click', function() {
    return clear();
  })
    function clear() {
     currentOperand.textContent = '0'
     previousOperand.textContent = ''
     firstOperand = ''
     secondOperand = ''
     currentOperation = null
  }

  btn.addEventListener('click', function() {
    return appendPoint();
  })
  function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperand.textContent === '')
      currentOperand.textContent = '0'
    if (currentOperand.textContent.includes('.')) return
    currentOperand.textContent += '.'
  }
  
function sum(a, b) {
  a = Number(a);
  b = Number(b)
    return a + b
}
function subtraction(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    if(operator == '+') {
        return sum(a, b)
    } else if(operator == '-') {
        return subtraction(a, b)
    } else if( operator == '*') {
        return multiply(a, b)
    } else if(operator == '/') {
        return divide(a, b)
    }
  };

