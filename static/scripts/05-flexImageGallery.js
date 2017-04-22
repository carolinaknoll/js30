const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);

  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

/* 1. take each of the panels */
/* 2. loop over them */
/* 3. listen for a click event in each one of them */
/* 4. run the toggleOpen when click is run */
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));