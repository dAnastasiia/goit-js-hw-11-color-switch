const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalID = null;

function changeBgc() {
  let bgcolor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = bgcolor;
}

function onStart() {
  if (refs.start.classList.contains('alreadyClicked')) {
    return;
  }
  refs.start.classList.add('alreadyClicked');
  intervalID = setInterval(() => changeBgc(), 1000);
}

function onStop() {
  clearInterval(intervalID);
  refs.start.removeAttribute('class');
  refs.body.removeAttribute('style');
}

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
