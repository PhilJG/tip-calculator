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

let e = Number(document.getElementById("entry").value);
let entry = e.toFixed(2);

const people = document.getElementById("people").value;
const reset = document.getElementById("reset");

// const tip = [0.05, 0.1, 0.15, 0.25, 0.5];
const percent = document.getElementsByClassName("percentSelect");
let active = document.getElementsByClassName("active");
let value = 0;

const customPercent = document.querySelector(".customPercent");
const customInput = document.querySelector(".customInput");
const customText = document.querySelector(".customText");
//Select tip value

function selectValue() {
  value = this.value;
  active = this.classList.toggle("active");
  value = Number(value);
  console.log(value);
}

for (let i = 0; i < percent.length; i++) {
  percent[i].addEventListener("click", selectValue);
}

//Custom select
const customSelect = function () {
  customInput.classList.remove("hidden");
  customPercent.classList.add("hidden");
};

customPercent.addEventListener("click", customSelect);

//Calculate total amount

let tipResult = document.querySelector(".result__total--tip");
let billResult = document.querySelector(".result__total--bill");

const totalCalc = function () {
  console.log(value, typeof value);
  console.log(entry, typeof entry);
  console.log(people, typeof people);
  let total = (entry / people).toFixed(2);
  billResult.textContent = `$${total}`;
  let tipTotal = ((entry * value) / people).toFixed(2);
  tipResult.textContent = `$${tipTotal}`;
  console.log(
    `Tip percent is ${value}%, Tip/person is ${tipTotal}, Total/person is ${total} `
  );
};

reset.addEventListener("click", totalCalc);

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
