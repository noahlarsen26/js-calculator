const btns = document.querySelectorAll(".btn");
const display = document.querySelectorAll(".display");
const answer = document.querySelector(".answer");
const btnContainer = document.querySelector(".btn-container");
const divide = document.getElementById("divide");
const addition = document.getElementById("plus");
const subtract = document.getElementById("minus");
const multiply = document.getElementById("times");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");

let firstNum = "";
let secondNum = "";
let operator = "";
let decimalCount = 0;

numbers.forEach((num) => {
  let value = num.textContent;
  num.addEventListener("click", () => {
    if (num.textContent === ".") {
      decimalCount++;
    }
    if (num.textContent === "." && decimalCount > 1) {
      return;
    }
    if (clear) {
      decimalCount = 0;
    }
    if (operator === "") {
      // Read first number if no operator set yet
      answer.textContent = firstNum += value;
    } else {
      //read second number
      answer.textContent = secondNum += value;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (e.target.textContent !== "=") {
      operator = e.target.textContent;
      answer.textContent = firstNum + operator;
    } else {
      answer.textContent = secondNum;
      switch (operator) {
        case "+":
          console.log(
            (parseFloat(firstNum) + parseFloat(secondNum)).toFixed(2)
          );
          answer.textContent = (
            parseFloat(firstNum) + parseFloat(secondNum)
          ).toFixed(2);
          break;
        case "-":
          console.log(
            (parseFloat(firstNum) - parseFloat(secondNum)).toFixed(2)
          );
          answer.textContent = (
            parseFloat(firstNum) - parseFloat(secondNum)
          ).toFixed(2);
          break;
        case "X":
          console.log(
            (parseFloat(firstNum) * parseFloat(secondNum)).toFixed(2)
          );
          answer.textContent = (
            parseFloat(firstNum) * parseFloat(secondNum)
          ).toFixed(2);
          break;
        case "/":
          console.log(
            (parseFloat(firstNum) / parseFloat(secondNum)).toFixed(2)
          );
          answer.textContent = (
            parseFloat(firstNum) / parseFloat(secondNum)
          ).toFixed(2);
          break;
        default:
          break;
      }
    }
  });
});

clear.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  operator = "";
  answer.textContent = "";
});

// decimal.addEventListener("click", () => {
//   parseInt(decimal);
// });
