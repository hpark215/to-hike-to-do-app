// variables for the buttons

const submitBtn1 = document.getElementById("submitBtn1");
const submitBtn2 = document.getElementById("submitBtn2");
const submitBtn3 = document.getElementById("submitBtn3");
const submitBtn4 = document.getElementById("submitBtn4");
const submitBtn5 = document.getElementById("submitBtn5");

// variable for the running icon
const runningGuy = document.querySelector(".runningGuy");

// varibles for the messages

const intro_msg = document.getElementById("intro_msg");
const msg_two = document.getElementById("msg_two");
const msg_three = document.getElementById("msg_three");
const msg_four = document.getElementById("msg_four");
const msg_five = document.getElementById("msg_five");
const finish_msg = document.getElementById("congrats_msg");

//
//
// event listeners for the submit buttons
submitBtn1.addEventListener("click", function () {
  runningGuy.classList.add("moveLevelOne");
  intro_msg.classList.add("disappear");
  msg_two.classList.add("appear");
  submitBtn1.disabled = true;
});

submitBtn2.addEventListener("click", function () {
  runningGuy.classList.add("moveLevelTwo");
  msg_two.classList.remove("appear");
  msg_three.classList.add("appear");
  submitBtn2.disabled = true;
});

submitBtn3.addEventListener("click", function () {
  runningGuy.classList.add("moveLevelThree");
  msg_three.classList.remove("appear");
  msg_four.classList.add("appear");
  submitBtn3.disabled = true;
});

submitBtn4.addEventListener("click", function () {
  runningGuy.classList.add("moveLevelFour");
  msg_four.classList.remove("appear");
  msg_five.classList.add("appear");
  submitBtn4.disabled = true;
});

submitBtn5.addEventListener("click", function () {
  runningGuy.classList.add("moveLevelFive");
  msg_five.classList.remove("appear");
  finish_msg.classList.add("appear");
  submitBtn5.disabled = true;
});
