Justify Items
Utilities for controlling how grid items are aligned along their inline axis.

​
Quick reference
Class
Properties
justify-items-start	justify-items: start;
justify-items-end	justify-items: end;
justify-items-center	justify-items: center;
justify-items-stretch	justify-items: stretch;
​
Basic usage
​
Start
Use justify-items-start to justify grid items against the start of their inline axis:

01
02
03
04
05
06
<div class="grid justify-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
​
End
Use justify-items-end to justify grid items against the end of their inline axis:

01
02
03
04
05
06
<div class="grid justify-items-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
​
Center
Use justify-items-center to justify grid items along their inline axis:

01
02
03
04
05
06
<div class="grid justify-items-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
​
Stretch
Use justify-items-stretch to stretch items along their inline axis:

01
02
03
04
05
06
<div class="grid justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>





MORE EXPLANANTION
**************************************************************************************************************


In Tailwind CSS, the justify-items utility class is used to control the horizontal alignment of items within a grid or flex container. It allows you to specify how the items should be aligned along the inline axis.

To apply the justify-items utility in Tailwind CSS, you can use the following classes:

justify-items-start: Aligns items to the start of the container.
justify-items-center: Centers items horizontally within the container.
justify-items-end: Aligns items to the end of the container.
justify-items-stretch: Stretches items to fill the entire width of the container.
Here's an example of using the justify-items utility class in Tailwind CSS for a grid layout:

html
Copy code
<div class="grid grid-cols-3 justify-items-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
In this example, the grid class sets the container to a grid layout with 3 columns, and the justify-items-center class centers the grid items horizontally within each column.

Here's an example of using the justify-items utility class in Tailwind CSS for a flex layout:

html
Copy code
<div class="flex justify-items-end">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
In this example, the flex class sets the container to a flex layout, and the justify-items-end class aligns the flex items to the end of the container along the inline axis.

You can apply the justify-items utility class to a grid or flex container to control the horizontal alignment of its items. Tailwind CSS provides a variety of utility classes for controlling alignment and positioning within grid and flex layouts. You can refer to the official Tailwind CSS documentation for more details on alignment utilities and their usage.


































