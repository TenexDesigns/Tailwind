Place Items
Utilities for controlling how items are justified and aligned at the same time.

​
Quick reference
Class
Properties
place-items-start	place-items: start;
place-items-end	place-items: end;
place-items-center	place-items: center;
place-items-baseline	place-items: baseline;
place-items-stretch	place-items: stretch;
​
Basic usage
​
Start
Use place-items-start to place grid items on the start of their grid areas on both axes:

01
02
03
04
05
06
<div class="grid grid-cols-3 gap-4 place-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
​
End
Use place-items-end to place grid items on the end of their grid areas on both axes:

01
02
03
04
05
06
<div class="grid grid-cols-3 gap-4 place-items-end h-56 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
​
Center
Use place-items-center to place grid items on the center of their grid areas on both axes:

01
02
03
04
05
06
<div class="grid grid-cols-3 gap-4 place-items-center h-56 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
​
Stretch
Use place-items-stretch to stretch items along their grid areas on both axes:

01
02
03
04
05
06
<div class="grid grid-cols-3 gap-4 place-items-stretch h-56 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div
