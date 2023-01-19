const secondsStick = document.querySelector(".second-hand");
const minutesStick = document.querySelector(".min-hand");
const hoursStick = document.querySelector(".hour-hand");
function setDate(){
    const now = new Date;
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/60)*360 + 90;
    secondsStick.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes/60)*360 + 90;
    minutesStick.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours/12)*360 + 90;
    hoursStick.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);