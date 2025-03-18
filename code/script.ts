// Should the timer itself maybe be an interface? 
// Enum
enum TimerState {
    Pomodoro = 'pomodoro',
    ShortBreak = 'shortbreak',
    LongBreak = 'longbreak',
}

// DOM Elements 
const timerText = document.getElementById('timer') as HTMLParagraphElement;
const pomodorBtn = document.getElementById('pomodoro') as HTMLButtonElement;
const shortBreakBtn = document.getElementById('short-break') as HTMLButtonElement;
const longBreakBtn = document.getElementById('long-break') as HTMLButtonElement;
const startBtn = document.getElementById('start') as HTMLButtonElement;
const pauseBtn = document.getElementById('pause') as HTMLButtonElement;
// const resetBtn = document.getElementById('reset') as HTMLButtonElement;

// Setting up the timer duration and the interval
let timeLeft: number;
let interval: number;

const updateTimer = (): void => {
    // finding our current minutes and seconds
    const minutes: number = Math.floor(timeLeft / 60);
    const seconds: number = timeLeft % 60;

    // now we update the text in the timer 
    // timerText.innerText = `${minutes}:${seconds}`
    timerText.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

// this is so the timer actually counts down
const startTimer = (): void => {
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

}

// this is to pause the timer
const stopTimer = (): void => {
    clearInterval(interval);
}

// this was originally to reset the timer, but right now this one is disabled
const resetTimer = (timerDur: TimerState = TimerState.Pomodoro): void => {
    clearInterval(interval);
    if (timerDur === TimerState.Pomodoro) {
        timeLeft = 1500;
    } else if (timerDur === TimerState.ShortBreak) {
        timeLeft = 300;
    } else if (timerDur === TimerState.LongBreak) {
        timeLeft = 900;
    }

    updateTimer();



}

//  this is to set up the timer depending on what lenght you want 
const setUpTimer = (timerDur: TimerState): void => {

    if (timerDur === TimerState.Pomodoro) {
        timeLeft = 1500;

    } else if (timerDur === TimerState.ShortBreak) {
        timeLeft = 300;
    } else if (timerDur === TimerState.LongBreak) {
        timeLeft = 900;

    }

    updateTimer()
}

// asign the functions to the buttons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
// resetBtn.addEventListener("click", () => resetTimer());

// assign the functions to the different timer duration buttons
pomodorBtn.addEventListener("click", () => setUpTimer(TimerState.Pomodoro))
shortBreakBtn.addEventListener("click", () => setUpTimer(TimerState.ShortBreak))
longBreakBtn.addEventListener("click", () => setUpTimer(TimerState.LongBreak))

// Initial Set up 
setUpTimer(TimerState.Pomodoro);

