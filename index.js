"use strict";
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
  console.log(event.target.textContent);
}

function tttcAttacher() {
  let button = document.querySelector("#button0");
  button.addEventListener("click", targetTextToConsole);
}

function lovelyParaAttacher() {
  let para = document.querySelector("#thisisalovelyparagraph");
  para.addEventListener("click", lovelyToggle);
}

function lovelyButtonAttacher() {
  let button = document.querySelector("#button1");
  button.addEventListener("click", lovelyToggle);
}

// function updateOutput(){
//     const in1 = document.querySelector("#in1");
//     const in2 = document.querySelector("#in2");
//     const out1 = document.querySelector("#out1");
//     out1.textContent = in1.value + in2.value;

// }

// function concatAttacher() {
//   let in1 = document.querySelector("#in1");
//   let in2 = document.querySelector("#in2");
//   in1.addEventListener("change", updateOutput);
//   in2.addEventListener("change", updateOutput);
// }

function concatAttacher() {
  const inputs = document.querySelectorAll("#in1, #in2");
  const out1 = document.querySelector("#out1");

  for (const input of inputs) {
    input.addEventListener("change", () => {
      out1.textContent = inputs[0].value + inputs[1].value;
    });
  }
}

function snitchAttacher() {
  debugger;
  const target = document.querySelector("#mousewatcher");
  target.addEventListener("mouseover", snitchUpdater);
  target.addEventListener("mouseout", snitchUpdater);
}
