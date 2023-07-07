Controlling grid element placement
Use the grid-flow-{keyword} utilities to control how the auto-placement algorithm works for a grid layout.



grid-flow-row	              grid-auto-flow: row;
grid-flow-col	              grid-auto-flow: column;
grid-flow-dense            	grid-auto-flow: dense;
grid-flow-row-dense	        grid-auto-flow: row dense;
grid-flow-col-dense	        grid-auto-flow: column dense;



<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>


