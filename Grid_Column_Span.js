Use the col-span-{n} utilities to make an element span n columns.


<div class="grid grid-cols-3 gap-4">
  <div class="...">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div>
</div>





Starting and ending lines
Use the col-start-{n} and col-end-{n} utilities to make an element start or end at the nth grid line. These can also be combined with the col-span-{n} utilities to span a specific number of columns.

Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.



