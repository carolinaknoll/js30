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
