Align Self
Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

​
Quick reference
Class
Properties
self-auto	align-self: auto;
self-start	align-self: flex-start;
self-end	align-self: flex-end;
self-center	align-self: center;
self-stretch	align-self: stretch;
self-baseline	align-self: baseline;
​
Basic usage
​
Auto
Use self-auto to align an item based on the value of the container’s align-items property:

01
02
03
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-auto ...">02</div>
  <div>03</div>
</div>
​
Start
Use self-start to align an item to the start of the container’s cross axis, despite the container’s align-items value:

01
02
03
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-start ...">02</div>
  <div>03</div>
</div>
​
Center
Use self-center to align an item along the center of the container’s cross axis, despite the container’s align-items value:

01
02
03
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-center ...">02</div>
  <div>03</div>
</div>
​
End
Use self-end to align an item to the end of the container’s cross axis, despite the container’s align-items value:

01
02
03
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-end ...">02</div>
  <div>03</div>
</div>
​
Stretch
Use self-stretch to stretch an item to fill the container’s cross axis, despite the container’s align-items value:

01
02
03
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-stretch ...">02</div>
  <div>03</div>
</div>



.....
