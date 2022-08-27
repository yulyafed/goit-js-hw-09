const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

function onButtonStartClick() {
    buttonStart.disabled = true;
    intervalId = setInterval(() => {
        const hexColor = getRandomHexColor();
        document.body.style.backgroundColor = hexColor;
    }, 1000);
}

function onButtonStopClick() {
    clearInterval(intervalId);
    buttonStart.disabled = false;
}














