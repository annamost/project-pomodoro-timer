// Seeting up the timers as an interface each
interface Timer {
    name: string,
    duration: number,
    isRunning: boolean,
}
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

// Set up the timers 
let allTimers: Timer[] = [
    { name: 'pomodoro', duration: 1500, isRunning: true },
    { name: 'shortbreak', duration: 300, isRunning: false },
    { name: 'longbreak', duration: 900, isRunning: false }
]
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
    // I need to first clear the interval..
    if (interval !== undefined) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's Up!");
            // now we reset the timer
            let currentTimer: number = allTimers.findIndex((littletimer) => littletimer.isRunning == true);

            timeLeft = allTimers[currentTimer].duration;
            updateTimer();
        }
    }, 1000);

}

// this is to pause the timer
const stopTimer = (): void => {
    clearInterval(interval);
}

// this was originally to reset the timer, but right now this one is disabled
const resetTimer = (): void => {
    clearInterval(interval);
    // checking which timer is currently running and then reseting the duration to that
    let currentTimer: number = allTimers.findIndex((littletimer) => littletimer.isRunning == true);

    timeLeft = allTimers[currentTimer].duration;

    updateTimer();



}

//  this is to set up the timer depending on what lenght you want 
const setUpTimer = (timerDur: TimerState): void => {
    // I change the is running state to true for the timer that is activated the other ones will be false
    stopTimer()
    if (timerDur === TimerState.Pomodoro) {
        allTimers[0].isRunning = true;
        allTimers[1].isRunning = false;
        allTimers[2].isRunning = false;

    } else if (timerDur === TimerState.ShortBreak) {
        allTimers[1].isRunning = true;
        allTimers[0].isRunning = false;
        allTimers[2].isRunning = false;
    } else if (timerDur === TimerState.LongBreak) {
        allTimers[2].isRunning = true;
        allTimers[1].isRunning = false;
        allTimers[0].isRunning = false;

    }

    let currentTimer: number = allTimers.findIndex((littletimer) => littletimer.isRunning == true);

    timeLeft = allTimers[currentTimer].duration;

    updateTimer()
}

// asign the functions to the buttons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", () => resetTimer());

// assign the functions to the different timer duration buttons
pomodorBtn.addEventListener("click", () => setUpTimer(TimerState.Pomodoro))
shortBreakBtn.addEventListener("click", () => setUpTimer(TimerState.ShortBreak))
longBreakBtn.addEventListener("click", () => setUpTimer(TimerState.LongBreak))

// Initial Set up 
setUpTimer(TimerState.Pomodoro);

