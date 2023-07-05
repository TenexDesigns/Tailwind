To install and use Tailwind CSS, youll need Node.js and npm (node package manager) installed on your computer. Once you have these prerequisites, you can follow the steps below:

1.Install Tailwind via npm
You can install Tailwind CSS by running the following command in your terminal:

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  
This will install Tailwind CSS along with PostCSS and Autoprefixer, which are peer-dependencies of Tailwind v1.tailwindcss.com, v2.tailwindcss.com.


  
  2.Initialize Tailwind Configuration File
After installing, you need to initialize a new configuration file for Tailwind. This can be done by running the following command:

npx tailwindcss init

This will generate a tailwind.config.js file in your project root. You can customize your build of Tailwind CSS in this file devdojo.com.


  
3.Include Tailwind in your CSS

Finally, you need to include Tailwinds directives in your CSS file. These directives (base, components, and utilities) will be replaced with Tailwinds pre-designed styles when you build your CSS.

@tailwind base;
@tailwind components;
@tailwind utilities;
After this, you need to build your CSS file using a command that depends on your build process. If youre not using a build process, you can use Tailwind CLI to build your CSS file dev.to.

Remember, Tailwind CSS is a utility-first CSS framework, which means it provides low-level utility classes for you to build your design. You can then use these classes in your HTML to style your website v1.tailwindcss.com.

4.Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],


6.Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

Terminal

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch




7.Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

src/index.html

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

  
