To add new animation @keyframes, use the keyframes section of your theme configuration:

tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
  }
}
You can then reference these keyframes by name in the animation section of your theme configuration:

tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  }
}
Learn more about customizing the default theme in the theme customization documentation.




MORE EXPLANANTION
  *********V******************************************************************************************

To implement CSS animations in Tailwind CSS, you can use utility classes and define keyframes using the @keyframes rule. Here's how you can achieve different aspects of CSS animations explained in the code samples:

Keyframes and Animation Duration:
Define keyframes using the @keyframes rule and apply them to an element using utility classes for animation name and duration.
html
Copy code
<div class="animate-example"></div>

@keyframes example {
  from { background-color: red; }
  to { background-color: yellow; }
}

.animate-example {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
Using Keyframes with Percentages:
Define keyframes using percentage values and apply them to an element.
html
Copy code
<div class="animate-example"></div>

@keyframes example {
  0% { background-color: red; }
  25% { background-color: yellow; }
  50% { background-color: blue; }
  100% { background-color: green; }
}

.animate-example {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
Animating Multiple Properties:
Animate multiple properties simultaneously by defining keyframes with different styles.
html
Copy code
<div class="animate-example"></div>

@keyframes example {
  0% { background-color: red; left: 0px; top: 0px; }
  25% { background-color: yellow; left: 200px; top: 0px; }
  50% { background-color: blue; left: 200px; top: 200px; }
  75% { background-color: green; left: 0px; top: 200px; }
  100% { background-color: red; left: 0px; top: 0px; }
}

.animate-example {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
Delaying an Animation:
Add a delay before starting an animation using the animation-delay property.
html
Copy code
<div class="animate-example"></div>

.animate-example {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
Controlling Animation Iteration:
Control the number of times an animation runs using the animation-iteration-count property.
html
Copy code
<div class="animate-example"></div>

.animate-example {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
Specifying Animation Direction:
Specify the direction of an animation using the animation-direction property.
html
Copy code
<div class="animate-example"></div>

.animate-example {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}

<div class="animate-example"></div>

.animate-example {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate;
}

<div class="animate-example"></div>

.animate-example {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate-reverse;
}
Timing Function and Fill Mode:
Specify the timing function using the animation-timing-function property and control the styles before and after the animation using the animation-fill-mode property.
html
Copy code
<div class="animate-example"></div>

@keyframes example {
  from { background-color: red; }
  to { background-color: yellow; }
}

.animate-example {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}
You can adjust the styles, durations, and other properties according to your needs. The provided code samples demonstrate the basic implementation of CSS animations in Tailwind CSS.












