Text Transform
Utilities for controlling the transformation of text.

​
Quick reference
Class
Properties
uppercase	text-transform: uppercase;
lowercase	text-transform: lowercase;
capitalize	text-transform: capitalize;
normal-case	text-transform: none;
​
Basic usage
​
Transforming text
The uppercase and lowercase will uppercase and lowercase text respectively, whereas capitalize utility will convert text to title-case. The normal-case utility can be used to preserve the original casing — typically to reset capitalization at different breakpoints.

normal-case
The quick brown fox jumps over the lazy dog.

uppercase
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

lowercase
the quick brown fox jumps over the lazy dog.

capitalize
The Quick Brown Fox Jumps Over The Lazy Dog.

<p class="normal-case ...">The quick brown fox ...</p>
<p class="uppercase ...">The quick brown fox ...</p>
<p class="lowercase ...">The quick brown fox ...</p>
<p class="capitalize ...">The quick brown fox ...</p>
....
