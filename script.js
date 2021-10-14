const calculator = document.querySelector('#calculator')
const keys = document.querySelector('.keys')
const buttons = document.querySelectorAll("button")
const output = document.getElementById("output")
// const equals = document.querySelector("#equal")
const numbers = document.getElementsByClassName("number")
const clear = document.getElementById("clear")
// const operation = document.getElementsByClassName("operator")

let firstNumber = "";
let secondNumber = "";
let operator = "";
let equals = "";

// const attach = () => {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
        output.innerHTML += button.innerHTML
        
        if (
          button.innerHTML === "+" ||
          button.innerHTML === "-" ||
          button.innerHTML === "x" ||
          button.innerHTML === "÷"
        ) {
          operator = button.innerHTML;

          console.log("operator is =" + operator); 
        }

        if (
          button.innerHTML === "1" ||
          button.innerHTML === "2" ||
          button.innerHTML === "3" ||
          button.innerHTML === "4" ||
          button.innerHTML === "5" ||
          button.innerHTML === "6" ||
          button.innerHTML === "7" ||
          button.innerHTML === "8" ||
          button.innerHTML === "9" ||
          button.innerHTML === "0"
        ) {
          if (operator) {
            secondNumber += button.innerHTML;
          } else {
            firstNumber += button.innerHTML;
          }

          console.log("first number =" + firstNumber);
          console.log("second number =" + secondNumber); 
        }

        if (button.innerHTML === "=") {
            if (operator === "+") {
                output.innerHTML = parseInt(firstNumber) + parseInt(secondNumber)
            } else if (operator === "-") {
                output.innerHTML = parseInt(firstNumber) - parseInt(secondNumber)
            } else if (operator === "x") {
                output.innerHTML = parseInt(firstNumber) * parseInt(secondNumber)
            } else if (operator === "÷") {
                output.innerHTML = parseInt(firstNumber) / parseInt(secondNumber)
            }
            console.log("the sum =" + equals)
    }
    document.querySelector("#clear").addEventListener("click", (event) => {
      location.reload()
    })
  }) 
    });
    