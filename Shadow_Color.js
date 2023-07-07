In Tailwind CSS, you can customize the shadow color by specifying the color value in the box shadow utility classes. Here's an example:

html
Copy code
<div class="shadow-sm text-white bg-gray-800 ..."></div>
<div class="shadow-md text-white bg-gray-800 ..."></div>
<div class="shadow-lg text-white bg-gray-800 ..."></div>
<div class="shadow-xl text-white bg-gray-800 ..."></div>
<div class="shadow-2xl text-white bg-gray-800 ..."></div>
In this example, the text-white class sets the text color to white, and the bg-gray-800 class sets the background color to a shade of gray (gray-800). By combining the shadow utility classes with appropriate text and background colors, you can customize the shadow color as per your requirements.

Alternatively, if you want to define custom shadow colors in your tailwind.config.js file, you can extend the boxShadow section with your desired color values:

javascript
Copy code
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
        'custom-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-color': '0 2px 4px 0 rgba(255, 0, 0, 0.25)', // Custom shadow color
      },
    },
  },
  variants: {},
  plugins: [],
}
In this example, 'custom-color' defines a custom shadow with a specific color value (rgba(255, 0, 0, 0.25)), which represents a red shadow with reduced opacity.

After adding the custom shadow color, you can use it as a utility class in your HTML code:

html
Copy code
<div class="shadow-custom-color ..."></div>
By using the custom shadow color utility class, you can apply the desired shadow color defined in your tailwind.config.js file.

Remember to rebuild your CSS file after modifying the tailwind.config.js file to see the changes take effect.

Tailwind CSS provides flexibility in customizing the shadow color by allowing you to set the text color, background color, or by defining your own custom shadow colors in the configuration file.



  ...
