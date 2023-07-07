Margin
Utilities for controlling an element's margin.

​
Quick reference
Class
Properties
m-0	margin: 0px;
mx-0	margin-left: 0px;
margin-right: 0px;
my-0	margin-top: 0px;
margin-bottom: 0px;
ms-0	margin-inline-start: 0px;
me-0	margin-inline-end: 0px;
mt-0	margin-top: 0px;

​
Basic usage
​
Add margin to a single side
Control the margin on one side of an element using the m{t|r|b|l}-{size} utilities.

For example, mt-6 would add 1.5rem of margin to the top of an element, mr-4 would add 1rem of margin to the right of an element, mb-8 would add 2rem of margin to the bottom of an element, and ml-2 would add 0.5rem of margin to the left of an element.

mt-6
mr-4
mb-8
ml-2
<div class="mt-6 ...">mt-6</div>
<div class="mr-4 ...">mr-4</div>
<div class="mb-8 ...">mb-8</div>
<div class="ml-2 ...">ml-2</div>
​
Add horizontal margin
Control the horizontal margin of an element using the mx-{size} utilities.

mx-8
<div class="mx-8 ...">mx-8</div>
​
Add vertical margin
Control the vertical margin of an element using the my-{size} utilities.

my-8
<div class="my-8 ...">my-8</div>
​
Add margin to all sides
Control the margin on all sides of an element using the m-{size} utilities.

m-8
<div class="m-8 ...">m-8</div>
​
Using negative values
To use a negative margin value, prefix the class name with a dash to convert it to a negative value.

-mt-8
<div class="w-36 h-16 bg-sky-400 opacity-20 ..."></div>
<div class="-mt-8 bg-sky-300 ...">-mt-8</div>
​
Using logical properties
Use the ms-* and me-* utilities to set the margin-inline-start and margin-inline-end logical properties, which map to either the left or right side based on the text direction.

Left-to-right

ms-8
me-8
Right-to-left

ms-8
me-8
<div dir="ltr">
  <div class="ms-8 ...">ms-8</div>
  <div class="me-8 ...">me-8</div>
<div>

<div dir="rtl">
  <div class="ms-8 ...">ms-8</div>
  <div class="me-8 ...">me-8</div>
<div>
For more control, you can also use the LTR and RTL modifiers to conditionally apply specific styles depending on the current text direction.
