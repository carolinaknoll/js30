// Select the inputs we want to control dynamically
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {

  // dataset allows access to html 'data-something' atributes!
  const suffix = this.dataset.sizing || '';

  // 1. get the name of the property (spacing, blur, color) using template strings
  // 2. get the value of the name of the property
  // 3. append the suffix that has the 'px' so it works correctly
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Call the handleUpdate function on change and mousemove events
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));