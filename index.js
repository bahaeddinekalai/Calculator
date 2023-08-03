function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = 0;
let secondeNumber = 0;
let operator = "";

function operate(operator, firstNumber, secondeNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondeNumber);

    case "-":
      return subtract(firstNumber, secondeNumber);

    case "×":
      return multiply(firstNumber, secondeNumber);

    case "÷":
      if (secondeNumber === 0) {
        return "Error";
      } else if (secondeNumber === 0) {
        if (Number.isInteger(divide(firstNumber, secondeNumber))) {
          return divide(firstNumber, secondeNumber).toString();
        }
      }else{
        return divide(firstNumber, secondeNumber).toFixed(2);
      }

    default:
      return "Error";
  }
}

let grid = document.querySelector(".main-buttons");
const size = 4;
for (let i = 0; i < size; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < size; j++) {
    let column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
  }
  grid.appendChild(row);
}
let cells = document.querySelectorAll(".column");

const content = [7, 4, 1, ".", 8, 5, 2, 0, 9, 6, 3, "=", "÷", "×", "-", "+"];

for (let i = 0; i < cells.length; i++) {
  cells[i].innerHTML = `${content[i]}`;
}

let display = document.querySelector(".operation");
function displayNumber(value) {
  display.innerHTML += value;
}
let clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  display.innerHTML = "";
  firstNumber = 0;
  secondeNumber = 0;
  operator = "";
  resultEqual = true;
});
let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.slice(0, -1);
});
let resultEqual = true;
let buttons = document.querySelectorAll(".column");
let isFirstNumber = true;
let hasOperator = false;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if ("0123456789.".includes(this.innerText)) {
      if ("+-×÷".includes(display.innerHTML) || operator != "") {
        display.innerHTML = "";
      }
      if (this.innerText == "." && display.innerHTML.includes(".")) {
        return;
      }
      displayNumber(this.innerText);
    } else if ("+-×÷".includes(this.innerText)) {
      if (!hasOperator) {
        isFirstNumber = false;
        hasOperator = true;
        firstNumber = display.innerText;
      }
      operator = this.innerText;
      display.innerHTML = this.innerText;
    } else if (this.innerHTML === "=") {
      if (hasOperator) {
        secondeNumber = display.innerHTML;
        if (operator === "÷" && secondeNumber === "0") {
          display.innerHTML = "Error";
        } else {
          display.innerHTML = operate(
            operator,
            parseFloat(firstNumber),
            parseFloat(secondeNumber)
          );
        }
      }
      isFirstNumber = true;
      hasOperator = false;
      operator = "";
    }
  });
});