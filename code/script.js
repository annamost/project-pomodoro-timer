"use strict";
// Should the timer itself maybe be an interface? 
// Enum
var TimerState;
(function (TimerState) {
    TimerState["Pomodoro"] = "pomodoro";
    TimerState["ShortBreak"] = "shortbreak";
    TimerState["LongBreak"] = "longbreak";
})(TimerState || (TimerState = {}));
// DOM Elements 
const timerText = document.getElementById('timer');
const pomodorBtn = document.getElementById('pomodoro');
const shortBreakBtn = document.getElementById('short-break');
const longBreakBtn = document.getElementById('long-break');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
// const resetBtn = document.getElementById('reset') as HTMLButtonElement;
// Setting up the timer duration and the interval
let timeLeft;
let interval;
const updateTimer = () => {
    // finding our current minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // now we update the text in the timer 
    // timerText.innerText = `${minutes}:${seconds}`
    timerText.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
// this is so the timer actually counts down
const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's Up!");
            // timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
};
// this is to pause the timer
const stopTimer = () => {
    clearInterval(interval);
};
// this was originally to reset the timer, but right now this one is disabled
const resetTimer = (timerDur = TimerState.Pomodoro) => {
    clearInterval(interval);
    if (timerDur === TimerState.Pomodoro) {
        timeLeft = 1500;
    }
    else if (timerDur === TimerState.ShortBreak) {
        timeLeft = 300;
    }
    else if (timerDur === TimerState.LongBreak) {
        timeLeft = 900;
    }
    updateTimer();
};
//  this is to set up the timer depending on what lenght you want 
const setUpTimer = (timerDur) => {
    if (timerDur === TimerState.Pomodoro) {
        timeLeft = 1500;
    }
    else if (timerDur === TimerState.ShortBreak) {
        timeLeft = 300;
    }
    else if (timerDur === TimerState.LongBreak) {
        timeLeft = 900;
    }
    updateTimer();
};
// asign the functions to the buttons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
// resetBtn.addEventListener("click", () => resetTimer());
// assign the functions to the different timer duration buttons
pomodorBtn.addEventListener("click", () => setUpTimer(TimerState.Pomodoro));
shortBreakBtn.addEventListener("click", () => setUpTimer(TimerState.ShortBreak));
longBreakBtn.addEventListener("click", () => setUpTimer(TimerState.LongBreak));
// Initial Set up 
setUpTimer(TimerState.Pomodoro);
