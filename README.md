# Pomodoro Timer
Project: Build a pomodoro timer using TypeScript

## Tech stack
- TypeScript
- JavaScript 
- HTML 
- CSS 

## Project

In this project, I wanted to apply what I have learned about TypeScript. My goal was here to create a Pomodoro Timer that counts down different durations. I made a very simple design in Figma and build the skeleton and the basic styling using HTML and CSS. Then, I added the functionality using TypeScript. For each of the time durations I used enums to differentiate between the classic pomodoro (25 min) timer and two different break timers short (5 min) and long (15 min). Using  event listener function on the buttons that take the enum as an input and update the duration of the timer on click. The timer itself gets updated every second (using an interval) and then displayed on the website. When the timer runs out a alert is played to the user. 

Next steps: Adding a reset button. Right now you can reset the timer by clicking on the top buttons (maybe keeping the current "state" (which time duration we are in) in mind). Adding some animations and musik. 

## View it live

Project is deployed here: [Cloud Timer](https://cloudtimer.netlify.app)