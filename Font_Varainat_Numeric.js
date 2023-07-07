Ordinal
Use the ordinal utility to enable special glyphs for the ordinal markers.

1st

<p class="ordinal ...">1st</p>
​
Slashed Zero
Use the slashed-zero utility to force a 0 with a slash; this is useful when a clear distinction between O and 0 is needed.

0

<p class="slashed-zero ...">0</p>
​
Lining figures
Use the lining-nums utility to use the numeric glyphs that are all aligned by their baseline. This corresponds to the lnum OpenType feature. This is the default for most fonts.

1234567890

<p class="lining-nums ...">
  1234567890
</p>
​
Oldstyle figures
Use the oldstyle-nums utility to use numeric glyphs where some numbers have descenders. This corresponds to the onum OpenType feature.

1234567890

<p class="oldstyle-nums ...">
  1234567890
</p>
​
Proportional figures
Use the proportional-nums utility to use numeric glyphs that have proportional widths (rather than uniform/tabular). This corresponds to the pnum OpenType feature.

12121

90909

<p class="proportional-nums ...">
  12121
</p>
<p class="proportional-nums ...">
  90909
</p>
​
Tabular figures
Use the tabular-nums utility to use numeric glyphs that have uniform/tabular widths (rather than proportional). This corresponds to the tnum OpenType feature.

12121

90909

<p class="tabular-nums ...">
  12121
</p>
<p class="tabular-nums ...">
  90909
</p>
​
Diagonal fractions
Use the diagonal-fractions utility to replace numbers separated by a slash with common diagonal fractions. This corresponds to the frac OpenType feature.

1/2 3/4 5/6

<p class="diagonal-fractions ...">
  1/2 3/4 5/6
</p>
​
Stacked fractions
Use the stacked-fractions utility to replace numbers separated by a slash with common stacked fractions. This corresponds to the afrc OpenType feature. Very few fonts seem to support this feature — we’ve used Ubuntu Mono here.

1/2 3/4 5/6

<p class="stacked-fractions ...">
  1/2 3/4
  5/6
</p>




MORE EXPLANANTION
*********************************************v*********************************************************************************************************

  In Tailwind CSS, you can use utility classes to control the variant of numbers using the font-variant-numeric property. Here are the utility classes for font variant numeric along with their descriptions:

normal-nums:

CSS Property: font-variant-numeric: normal;
Description: Sets the number variant to normal, which is the default style for numbers.
ordinal:

CSS Property: font-variant-numeric: ordinal;
Description: Sets the number variant to ordinal, which displays numbers as superscripted for use in ordinal indicators (1st, 2nd, 3rd, etc.).
slashed-zero:

CSS Property: font-variant-numeric: slashed-zero;
Description: Sets the number variant to slashed-zero, which replaces the zero character with a slashed version (0) for clearer distinction.
lining-nums:

CSS Property: font-variant-numeric: lining-nums;
Description: Sets the number variant to lining-nums, which displays numbers as uppercase lining figures (e.g., 0123456789).
oldstyle-nums:

CSS Property: font-variant-numeric: oldstyle-nums;
Description: Sets the number variant to oldstyle-nums, which displays numbers with varying heights and proportions for a more traditional look.
proportional-nums:

CSS Property: font-variant-numeric: proportional-nums;
Description: Sets the number variant to proportional-nums, which displays numbers with proportional widths, similar to normal text.
tabular-nums:

CSS Property: font-variant-numeric: tabular-nums;
Description: Sets the number variant to tabular-nums, which displays numbers with equal widths, making them align vertically in columns.
diagonal-fractions:

CSS Property: font-variant-numeric: diagonal-fractions;
Description: Sets the number variant to diagonal-fractions, which enables diagonal fraction characters for displaying fractions.
stacked-fractions:

CSS Property: font-variant-numeric: stacked-fractions;
Description: Sets the number variant to stacked-fractions, which enables stacked fraction characters for displaying fractions.
You can apply these utility classes directly to the HTML elements that contain numbers to control the visual representation of the numbers. For example:

html
Copy code
<p class="lining-nums">1234567890</p>
In this example, the lining-nums class is applied to the paragraph element to display the numbers with uppercase lining figures.

These font variant numeric utility classes in Tailwind CSS provide convenient options to style numbers and fractions based on your design requirements.




























































  
