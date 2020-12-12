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

function bodyBgc() {
  let bgcolor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = bgcolor;
}

const changeColor = {
  intervalID: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalID = setInterval(bodyBgc, 1000);
  },
  stop() {
    clearInterval(this.intervalID);
    this.isActive = false;
    refs.body.removeAttribute('style');
  },
};

refs.start.addEventListener('click', changeColor.start.bind(changeColor));
refs.stop.addEventListener('click', changeColor.stop.bind(changeColor));
