Aspect Ratio

Tailwind CSS allows you to create responsive elements that maintain a specific aspect ratio. This is useful for embedding content like iframes or images that need to be displayed at a specific aspect ratio.

<div class="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowfullscreen></iframe>
</div>
creative-tim.com

Container

Tailwind CSS provides a .container utility, which sets the max-width of an element to match the min-width of the current viewport.

<div class="container mx-auto">
  Content goes here
</div>
codeinwp.com

Columns

Tailwind CSS doesn't have a built-in grid system, but you can easily create columns using the flex utility classes.

<div class="flex">
  <div class="w-1/2">Column 1</div>
  <div class="w-1/2">Column 2</div>
</div>
codeinwp.com

Break After, Break Before, Break Inside

These utilities are used to control how page breaks should behave inside a box.

<div class="break-inside-auto">Content</div>
tailwindcss.com

Box Decoration Break

This utility is used to control how box decorations are applied to elements with multiple boxes.

<div class="box-decoration-break-clone">Content</div>
tailwindtoolbox.com

Box Sizing

The box-sizing utilities are used to tell the browser what the sizing properties (width and height) should include.

<div class="box-content h-32 w-32 p-4">Content</div>
tailwindtemplates.co

Display

The display utilities are used to control the display type of an element.

<div class="display-inline">Content</div>
tailwindcss.com

Floats and Clear

The float utilities are used to float an element to the left or right, while the clear utilities are used to clear floated elements.

<div class="float-left">Float Left</div>
<div class="float-right">Float Right</div>
<div class="clear-both">Clear Both</div>
tailwindcss.com

Isolation

The isolation utilities are used to control the stacking context of an element.

<div class="isolate">Isolated Element</div>
tailwindcss.com

Object Fit and Object Position

The object-fit utilities are used to control how an element's content should fit within its box. object-position utilities are used to control the alignment of an element's content within its box.

<img class="object-cover object-center h-64 w-full" src="path/to/image.jpg">
tailwindcss.com

Overflow and Overscroll Behavior

The overflow utilities are used to control how overflowed content of an element is shown. overscroll-behavior utilities are used to control the browser's behavior when the boundary of a scrolling area is reached.

<div class="overflow-auto overscroll-y-auto">Content</div>
tailwindcss.com

Position

The position utilities are used to control the position of an element.

<div class="relative">
  <div class="absolute inset-0">
    Absolutely positioned element
  </div>
</div>
nerdcave.com

Top / Right / Bottom / Left

These utilities are used to control an element's position from the top, right, bottom, and left edges.

<div class="absolute top-0 right-0">Content</div>
nerdcave.com

Visibility

The visibility utilities are used to control the visibility of an element.

<div class="invisible">Invisible Content</div>

Z-Index

The z-index utilities are used to control the stack order of
