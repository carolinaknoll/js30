function playSound(e) {

  // since the value of the data-key attribute is a variable that lives inside the event,
  // we need to hug it with backticks and use ES6 template strings: ${}
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // skip when a key is pressed but there is no assigned button for it
  if (!audio) {
    return;
  }

  // 'this' is equal to what was called against it
  // addEventListener was called, and key was called against it
  this.classList.remove('playing');

  // if we call play() on an audio that is already playing, it wont play again
  // so we need to reset the audio time to 0 every time the keydown event is fired
  audio.currentTime(0);
  audio.play();

  // add the playing css class to the pressed button
  key.classList.add('playing');

});

function removeTransition(e) {

  // when we console.log e, it will show the event for everything that happens
  // we just need to use a single one, so we use the longest that ends and skip
  // all of the others
  if (e.propertyName !== 'transform') {
    return;
  }
}

// select every single key from the page and store them in keys
const keys = document.querySelectorAll('.key');

// loop over every key element, and listen for the transitionend event on each key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
