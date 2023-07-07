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


  'wiggle 1s ease-in-out infinite',   and { animation: example 5s linear 2s infinite alternate;}
***********************************
In the CSS animation shorthand property animation, the values represent different aspects of the animation. Let's break down the values in the example you provided:

css
Copy code
animation: example 5s linear 2s infinite alternate;
example: Specifies the name of the keyframe animation to be applied. In this case, it refers to an animation named "example" that has been defined using @keyframes.

5s: Defines the duration of the animation. It specifies how long the animation should take to complete one cycle. In this example, the animation will run for 5 seconds.

linear: Specifies the timing function of the animation. It determines the rate at which the animation progresses over time. linear means that the animation progresses at a constant speed from start to end.

2s: Sets the delay before the animation starts. It determines how long the animation should wait before beginning. In this case, there will be a 2-second delay before the animation starts.

infinite: Specifies that the animation should repeat indefinitely. It causes the animation to restart from the beginning once it completes. The animation will keep looping continuously.

alternate: Indicates that the animation should alternate direction on each iteration. It means that after completing one iteration, the animation will reverse its direction and play in reverse on the next iteration.

By combining these values, the animation will have a duration of 5 seconds, a linear timing function, a delay of 2 seconds before starting, and it will repeat indefinitely in an alternating manner.

You can customize these values based on your specific animation requirements.


***********************************


  
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












