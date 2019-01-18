document.addEventListener("DOMContentLoaded", function () {

  let screen = document.getElementById("screen");
  let equals = document.getElementsByClassName("equals");


  let digits = document.getElementsByClassName("dig");
  for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", function (e) {
      let clickedNum = event.target.value;
      screen.innerHTML = clickedNum
      // screen.innerHTML.appendChild(clickedNum);
    })
  }

  let ops = document.getElementsByClassName("op");
  for (let j = 0; j < ops.length; j++) {
    ops[j].addEventListener("click", function (e) {
      let clickedOp = event.target.value;
      screen.innerHTML = clickedOp;
    })
  }

  let clear = document.getElementById("clear");
  clear.addEventListener("click", function () {
    screen.innerHTML = "0";
  })



});

