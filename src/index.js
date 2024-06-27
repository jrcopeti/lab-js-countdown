const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const button = document.querySelector("#start-btn");
const timerDiv = document.querySelector("#time");
console.log(timerDiv.innerText);
button.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    remainingTime--;
    timerDiv.innerText = remainingTime;
    console.log(remainingTime);
    remainingTime <= 0 && clearInterval(timer);
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
