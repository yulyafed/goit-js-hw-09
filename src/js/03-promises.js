import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

form.addEventListener('submit', onFormClick);

function onFormClick(e) {
  e.preventDefault();
  const amount = Number(amountInput.value);
  let delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  };
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
  });
}
