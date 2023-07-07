Justify Content
Utilities for controlling how flex and grid items are positioned along a container's main axis.

​
Quick reference





START
Use justify-start to justify items against the start of the container’s main axis:

<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
​



Center

Use justify-center to justify items along the center of the container’s main axis:


<div class="flex justify-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
​




End
Use justify-end to justify items against the end of the container’s main axis:


<div class="flex justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
​






Space between
Use justify-between to justify items along the container’s main axis such that there is an equal amount of space between each item:

<div class="flex justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
​




Space around
Use justify-around to justify items along the container’s main axis such that there is an equal amount of space on each side of each item:

<div class="flex justify-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
​






Space evenly
Use justify-evenly to justify items along the container’s main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using justify-around:


<div class="flex justify-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
​




Stretch
Use justify-stretch to allow content items to fill the available space along the container’s main axis:


<div class="grid grid-flow-col justify-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
​





Normal
Use justify-normal to pack content items in their default position as if no justify-content value was set:


<div class="flex justify-normal ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>






