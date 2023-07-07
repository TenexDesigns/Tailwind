Font Size
Utilities for controlling the font size of an element.

​
Quick reference
Class
Properties
text-xs	font-size: 0.75rem; /* 12px */
line-height: 1rem; /* 16px */
text-sm	font-size: 0.875rem; /* 14px */
line-height: 1.25rem; /* 20px */
text-base	font-size: 1rem; /* 16px */
line-height: 1.5rem; /* 24px */
text-lg	font-size: 1.125rem; /* 18px */
line-height: 1.75rem; /* 28px */
text-xl	font-size: 1.25rem; /* 20px */
line-height: 1.75rem; /* 28px */
text-2xl	font-size: 1.5rem; /* 24px */
line-height: 2rem; /* 32px */
text-3xl	font-size: 1.875rem; /* 30px */
line-height: 2.25rem; /* 36px */
text-4xl	font-size: 2.25rem; /* 36px */
line-height: 2.5rem; /* 40px */
text-5xl	font-size: 3rem; /* 48px */
line-height: 1;
text-6xl	font-size: 3.75rem; /* 60px */
line-height: 1;
text-7xl	font-size: 4.5rem; /* 72px */
line-height: 1;
text-8xl	font-size: 6rem; /* 96px */
line-height: 1;
text-9xl	font-size: 8rem; /* 128px */
line-height: 1;
​
Basic usage
​
Setting the font size
Control the font size of an element using the text-{size} utilities.

text-sm
The quick brown fox jumps over the lazy dog.

text-base
The quick brown fox jumps over the lazy dog.

text-lg
The quick brown fox jumps over the lazy dog.

text-xl
The quick brown fox jumps over the lazy dog.

text-2xl
The quick brown fox jumps over the lazy dog.

<p class="text-sm ...">The quick brown fox ...</p>
<p class="text-base ...">The quick brown fox ...</p>
<p class="text-lg ...">The quick brown fox ...</p>
<p class="text-xl ...">The quick brown fox ...</p>
<p class="text-2xl ...">The quick brown fox ...</p>
​
Setting the line-height
Set an element’s line-height at the same time you set the font size by adding a line-height modifier to any font size utility. For example, use text-xl/8 to set a font size of 1.25rem with a line-height of 2rem.

text-base/6
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

text-base/7
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

text-base/loose
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/loose ...">So I started to walk into the water...</p>
You can use any value defined in your line-height scale, or use arbitrary values if you need to deviate from your design tokens.

<p class="text-sm/[17px] ..."></p>





FONT SIZE
*******************************************************************************************

In Tailwind CSS, you can use utility classes to set the font size of text elements. Tailwind provides a wide range of font size utility classes that allow you to easily control the size of your text. Here are some examples of font size utility classes in Tailwind CSS:

text-{size}:
CSS Property: font-size: {size};
Description: Sets the font size of the text to the specified size. {size} can be a numeric value, a relative size (such as sm, base, lg), or a predefined size (such as text-xs, text-2xl, text-3xl).
Example:

html
Copy code
<p class="text-lg">This is a large text.</p>
In this example, the text-lg class sets the font size of the paragraph to a large size.

text-{size}xl:
CSS Property: font-size: {size}rem;
Description: Sets the font size of the text to a specific relative size, where {size} is a numeric value. The size is calculated based on the base font size.
Example:

html
Copy code
<h1 class="text-4xl">This is a heading with a large font size.</h1>
In this example, the text-4xl class sets the font size of the heading to a larger size using a relative scale.

text-{size}vw:
CSS Property: font-size: {size}vw;
Description: Sets the font size of the text as a percentage of the viewport width, where {size} is a numeric value.
Example:

html
Copy code
<p class="text-3vw">This text will have a font size relative to the viewport width.</p>
In this example, the text-3vw class sets the font size of the paragraph to 3% of the viewport width.

You can also combine font size utility classes with other classes or responsive variants to create more dynamic and responsive typography. For example, md:text-xl sets the font size to extra large on medium-sized screens and above.

These font size utility classes in Tailwind CSS make it easy to apply consistent and responsive typography styles to your HTML elements.















