### JS30: JavaScript 30 projects Challenge – Log
:sparkles: This is my log for the JavaScript 30 projects challenge, where I write about everything I learn as I follow with the challenge projects.
***
#### 01 – Drum Kit:
As the first project, it was good to create a keyboard smasher of sorts. I wanted to make it a bit more fun than just a copy with comments, so I added more keys and sounds.

##### Key points:
– The use of ES6 template strings to select elements with variables that live inside events:
```javascript
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
```

– Having a forEach loop to add an event that removes the transition effect when the transition ends:
```javascript
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```
***
#### 02 – Classic Clock:
Creating a classic clock allows an interesting way to work with dates, and how to calculate them to match seconds, minutes and hours values. It was also great to learn how to transform seconds into usable degrees.
##### Key points:
– Turning seconds into degrees using the `((seconds / 60) * 360) + 90;` formula.
– Using ES6 template strings to enable the use of a dynamic value with a css property:
```javascript
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
```
***
#### 03 – CSS Variables:
In this exercise it was shown how to transform CSS property values into variables, and how to use them with JavaScript.
#### Key points:
– Defining inputs HTML (observe `name`, `value` and `data-sizing`):
```html
<div class="controls">
  <label for="spacing">Spacing:</label>
  <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

  <label for="blur">Blur:</label>
  <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

  <label for="base">Base Color</label>
  <input id="base" type="color" name="base" value="#ffc600">
</div>
```

– Using the values declared in our HTML as CSS variables:
```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

– Using JavaScript to use `setProperty` to set new values to our CSS variables dinamically.
```javascript
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```
***
