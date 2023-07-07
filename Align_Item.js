Align Items
Utilities for controlling how flex and grid items are positioned along a container's cross axis.

​
Quick reference
Class
Properties
items-start	align-items: flex-start;
items-end	align-items: flex-end;
items-center	align-items: center;
items-baseline	align-items: baseline;
items-stretch	align-items: stretch;
​
Basic usage
​
Stretch
Use items-stretch to stretch items to fill the container’s cross axis:

01
02
03
<div class="flex items-stretch ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
​
Start
Use items-start to align items to the start of the container’s cross axis:

01
02
03
<div class="flex items-start ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
​
Center
Use items-center to align items along the center of the container’s cross axis:

01
02
03
<div class="flex items-center ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
​
End
Use items-end to align items to the end of the container’s cross axis:

01
02
03
<div class="flex items-end ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
​
Baseline
Use items-baseline to align items along the container’s cross axis such that all of their baselines align:

01
02
03
<div class="flex items-baseline ...">
  <div class="pt-2 pb-6">01</div>
  <div class="pt-8 pb-12">02</div>
  <div class="pt-12 pb-4">03</div>
</div>





.....
