let body = document.querySelector('body');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let kussu = document.querySelector('#kussu');

let intervalId; 

let randomcolor = function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

start.addEventListener('click', function () {
  // Avoid multiple intervals
  if (!intervalId) {
    intervalId = setInterval(() => {
      body.style.background = randomcolor();
kussu.innerHTML = "<h1>I Love You <h1/>"
kussu.style.background = intervalId
    }, 200); // Use 800 milliseconds (not 0.8000)
  }
});

stop.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null; // Reset so it can be started again
});
