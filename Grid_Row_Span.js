Spanning rows
Use the row-span-{n} utilities to make an element span n rows.



  <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="row-span-2 col-span-2 ...">03</div>
</div>
​
Starting and ending lines
Use the row-start-{n} and row-end-{n} utilities to make an element start or end at the nth grid line. These can also be combined with the row-span-{n} utilities to span a specific number of rows.

Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.

..
