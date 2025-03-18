// Interface
// interface Timer {
//     duration: number,
//     currentTime: string,
//     isRunning: boolean,
// }
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
const resetBtn = document.getElementById('reset') as HTMLButtonElement;

// let pomoTimer: Timer = {
//     duration: 1500,
//     currentTime: '25:00',
//     isRunning: true,
// }
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

const stopTimer = (): void => {
    clearInterval(interval);
}

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

const setUpTimer = (timerDur: TimerState): void => {
    console.log(timerDur)
    if (timerDur === TimerState.Pomodoro) {
        timeLeft = 1500;
        console.log('Hello')
    } else if (timerDur === TimerState.ShortBreak) {
        timeLeft = 300;
    } else if (timerDur === TimerState.LongBreak) {
        timeLeft = 900;
        console.log(timeLeft)
    }
    console.log(timeLeft)
    updateTimer()
}

// asign the functions to the buttons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", () => resetTimer());

pomodorBtn.addEventListener("click", () => setUpTimer(TimerState.Pomodoro))
shortBreakBtn.addEventListener("click", () => setUpTimer(TimerState.ShortBreak))
longBreakBtn.addEventListener("click", () => setUpTimer(TimerState.LongBreak))

// Initial Set up? 
setUpTimer(TimerState.Pomodoro);

