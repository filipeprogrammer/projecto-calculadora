let displayEl = document.getElementById("result-display")
displayEl.textContent = 0

let firstOperand = ""
let secondOperand = ""
let operator = ""
let result = ""

let zeroEl = document.getElementById("zero")
let umEl = document.getElementById("um")
let doisEl = document.getElementById("dois")
let tresEl = document.getElementById("três")
let quatroEl = document.getElementById("quatro")
let cincoEl = document.getElementById("cinco")
let seisEl = document.getElementById("seis")
let seteEl = document.getElementById("sete")
let oitoEl = document.getElementById("oito")
let noveEl = document.getElementById("nove")

let maisEl = document.getElementById("mais")
let menosEl = document.getElementById("menos")
let vezesEl = document.getElementById("vezes")
let divindoEl = document.getElementById("dividindo")

let decimalEl = document.getElementById("decimal")

let equalEl = document.getElementById("igual")

let cleanEl = document.getElementById("limpar")

zeroEl.addEventListener("click",showZero)
umEl.addEventListener("click",showOne)
doisEl.addEventListener("click",showTwo)
tresEl.addEventListener("click",showThree)
quatroEl.addEventListener("click",showFour)
cincoEl.addEventListener("click",showFive)
seisEl.addEventListener("click",showSix)
seteEl.addEventListener("click",showSeven)
oitoEl.addEventListener("click",showEight)
noveEl.addEventListener("click",showNine)

maisEl.addEventListener("click", add)
menosEl.addEventListener("click", subtract)
vezesEl.addEventListener("click", multiplying)
divindoEl.addEventListener("click", dividing)

decimalEl.addEventListener("click", showDecimal)

equalEl.addEventListener("click", equal)

cleanEl.addEventListener("click", clear)

function showZero(){
  displayEl.textContent = 0
}

function showOne(){
  displayEl.textContent += 1
}

function showTwo(){
    displayEl.textContent += 2
  }

function showThree(){
    displayEl.textContent += 3
  }
  
  function showFour(){
    displayEl.textContent += 4
  }

  function showFive(){
    displayEl.textContent += 5
  }

  function showSix(){
    displayEl.textContent += 6
  }

  function showSeven(){
    displayEl.textContent += 7
  }

  function showEight(){
    displayEl.textContent += 8
  }

  function showNine(){
    displayEl.textContent += 9
  }

function add(){
   operator = "+"
   firstOperand = displayEl.textContent
   displayEl.textContent = ""
}

function subtract(){
  operator = "-"
  firstOperand = displayEl.textContent
  displayEl.textContent = ""
}  
  

function multiplying(){
  operator = "*"
  firstOperand = displayEl.textContent
  displayEl.textContent = ""
}

function dividing(){
  operator = "/"
  firstOperand = displayEl.textContent
  displayEl.textContent = ""
}

function showDecimal() {
  if (!displayEl.textContent.includes(".")) {
    displayEl.textContent += ".";
  }
}

function equal() {
  secondOperand = displayEl.textContent;
  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  displayEl.textContent = result;
}

function clear(){
  displayEl.textContent = "0"
  firstOperand = ""
  secondOperand = ""
  operator = ""
  result = ""

}