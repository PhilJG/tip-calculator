"use strict";

/*

Bill value is inputted as a number
Number of people is selected as a number
One of the tip percentage buttons are selected 
(If custom is selected it is switched to a number input)
tip percentage buttons have a value
When that value is selected it is multiplied by the bill amount 
It is then divided by the number of people 
That value is inputed to the tip amount field
That value is also added to the bill total and divided by the number of people

When reset is selected all the inputs are deleted

*/

let entry = document.getElementById("entry").value;
document.getElementById("entry").value = "";

// entry = entry.toFixed(2);

let people = document.getElementById("people").value;
document.getElementById("people").value = "";

const reset = document.getElementById("reset");

// const tip = [0.05, 0.1, 0.15, 0.25, 0.5];
const percent = document.getElementsByClassName("percentSelect");
let active = document.getElementsByClassName("active");
let tip = 0;

const customPercent = document.querySelector(".customPercent");
const customInputValue = document.querySelector("#customInput").value;
const customText = document.querySelector(".customText");

//Select tip value

function selectValue() {
  tip = this.value;
  tip = Number(tip);
}

for (let i = 0; i < percent.length; i++) {
  if (percent == percent[i] || customInputValue) {
    percent[i].addEventListener("click", selectValue);
  }
}

let customNumber = /[.](\d+)/;

const customEntry = document.querySelector(".customInput");

//Custom select
const customSelect = function () {
  customInput.classList.remove("hidden");
  customPercent.classList.add("hidden");
};

customPercent.addEventListener("click", customSelect);
console.log(customInputValue);

//Check input

// 1) I want both inputs(bill & people) to have the same functionality...
// 	- When a number(with on decimal) is inputed the input highlights green (00.00 or 00)
// 		- More detail regular expression required
// 	- When a different value is input like a letter or sepcial symbol it highlights red
// 		- Text will appear that says "Not a number"
//    - checkInput function currently only removes hidden class from from enrtyInput BOTH inputs do not have a value
//    - However the red border is changed if that single input is correct

let numbers = /((((\d*)[.](\d+){1,2}))|(\d+))/;
let empty = " ";

// use querySelector instead of querySelectorAll.
// Or use querySelectorAll("#id")[0],
// or use m[0].classList

let inputMessage = document.querySelectorAll("#input__message");

const entryInput = document.getElementById("entry");
const peopleInput = document.getElementById("people");

entryInput.textContent = "";

function checkInput(i, ei, m) {
  if (i.match(numbers)) {
    ei.classList.add("inputCorrect");
    ei.classList.remove("inputFalse");
    inputMessage[m].classList.add("hidden");
  } else if (!i.match(numbers) | i.match(empty)) {
    ei.classList.add("inputFalse");
    ei.style.border = "2px solid red";
    inputMessage[m].classList.remove("hidden");
  } else if (i.match(empty)) {
    ei.classList.remove("inputFalse");
    ei.classList.remove("inputCorrect");
    inputMessage[m].classList.add("hidden");
  }
}
let selectedPercent;

checkInput(entry, entryInput, 0);

checkInput(people, peopleInput, 1);

Number(entry, entryInput, 0);
Number(people, peopleInput, 1);

//Calculate total amount
// 2) Resulting values are calculated live.
// 	- All values are reset on refrest or reset press

let tipResult = document.querySelector(".result__total--tip");
let billResult = document.querySelector(".result__total--bill");

const totalCalc = function () {
  let total = Number(entry / people);
  total.toFixed(2);

  let tipTotal = Number(total * tip);
  let tipTotalFixed = tipTotal.toFixed(2);

  let billTotal = Number(total + tipTotal);
  let billTotalFixed = billTotal.toFixed(2);

  tipResult.textContent = `$${tipTotalFixed}`;
  billResult.textContent = `$${billTotalFixed}`;

  console.log(
    "Total/person before tip is",
    total,
    typeof total,
    "Tip/person is",
    tipTotal,
    typeof tipTotal,
    "Total+tip/person is",
    billTotalFixed,
    typeof tipTotal
  );
};

const resetPage = function () {
  entry = 0;
  tip = 0;
  total = 0;

  tipTotal = 0;
  tipTotalFixed = 0;

  billTotal = 0;
  billTotalFixed = 0;
};

//reset the calculation
reset.addEventListener("click", totalCalc);

//call the calculation
entryInput.addEventListener("input", totalCalc);
peopleInput.addEventListener("input", totalCalc);

// function tipPersonTotal() {}

// const tipTotal = entry;

// for (var i = 0; i < percent.length; i++) {
//   percent[i].addEventListener("click", function () {
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//   });
// }

// function displayCustom() {
//   if ((customPercent.style.display = "block")) {
//     customPercent.style.display = "none";
//     customInput.style.display = "block";
//     alert(customInput.style.display);
//   }
// }

// function result() {
//   console.log(people);
//   console.log(entry);
//   console.log(activePercent);
//   console.table(activePercent);
// }

// customPercent.addEventListener("click", displayCustom);
