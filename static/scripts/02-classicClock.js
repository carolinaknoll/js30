// select our clock's hand elements by their respective ids
const secondHand = document.querySelector('#second-hand');
const minsHand = document.querySelector('#min-hand');
const hourHand = document.querySelector('#hour-hand');

function setDate() {

  // get the current date to work with and store it in the now const
  const now = new Date();

  // get the current seconds of the date in the now const
  const seconds = now.getSeconds();

  // turn the seconds into degrees so we can work with the transform css property
  // we also add a 90 degree offset so the hand starts where it should start
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  console.log(secondsDegrees);

  // use our new seconds in degree value in the transform property and rotate it
  // same thing would be to use 'transform: rotate(90deg);' in css, but the value
  // is dynamic and changes every second, so we need to capture these changes
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // same thing happens with the minutes and the hours clock hands
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + (( mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// runs the function every second
setInterval(setDate, 1000);
setDate();