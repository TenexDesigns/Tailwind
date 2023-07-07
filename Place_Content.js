Place Content
Utilities for controlling how content is justified and aligned at the same time.

​
Quick reference
Class
Properties
place-content-center	place-content: center;
place-content-start	place-content: start;
place-content-end	place-content: end;
place-content-between	place-content: space-between;
place-content-around	place-content: space-around;
place-content-evenly	place-content: space-evenly;
place-content-baseline	place-content: baseline;
place-content-stretch	place-content: stretch;
​
Basic usage
​
Center
Use place-content-center to pack items in the center of the block axis:

01
02
03
04
<div class="grid grid-cols-2 gap-4 place-content-center h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
​
Start
Use place-content-start to pack items against the start of the block axis:

01
02
03
04
<div class="grid grid-cols-2 gap-4 place-content-start h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
​
End
Use place-content-end to to pack items against the end of the block axis:

01
02
03
04
<div class="grid grid-cols-2 gap-4 place-content-end h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
​
Space between
Use place-content-between to distribute grid items along the block axis so that that there is an equal amount of space between each row on the block axis.

01
02
03
04
<div class="grid grid-cols-2 gap-4 place-content-between h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
​
Space around
Use place-content-around distribute grid items such that there is an equal amount of space around each row on the block axis:

01
02
03
04
<div class="grid grid-cols-2 gap-4 place-content-around h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
​
Space evenly
Use place-content-evenly to distribute grid items such that they are evenly spaced on the block axis:

01
02
03
04
<div class="grid grid-cols-2 gap-4 place-content-evenly h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
​
Stretch
Use place-content-stretch to stretch grid items along their grid areas on the block axis:

01
02
03
04
<div class="grid grid-cols-2 gap-4 place-content-stretch h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
