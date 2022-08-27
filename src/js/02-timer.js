import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const buttonStart = document.querySelector('[data-start]');
const spanDay = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');

buttonStart.addEventListener('click', onButtonClick);

buttonStart.disabled = true;
let selectedDate = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = new Date();
        if (currentTime > selectedDates[0]) {
            buttonStart.disabled = true;
            Notiflix.Notify.info('Please choose a date in the future');
            return;
        }
        buttonStart.disabled = false;
        selectedDate = selectedDates[0];
    },
}

flatpickr("#datetime-picker", options);

function onButtonClick() {
    intervalId = setInterval(() => {
        const currentTime = new Date();
        const deltaTime = selectedDate - currentTime;
        if (deltaTime > 0) {
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            spanDay.textContent = days;
            spanHours.textContent  = hours;
            spanMinutes.textContent  = minutes;
            spanSeconds.textContent  = seconds;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}
