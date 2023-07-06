Configuration

Customization in Tailwind CSS is primarily done through the tailwind.config.js file, which is generated when you initialize Tailwind in your project. Here, you can customize the default configuration, add your own custom styles, or extend the default styles.

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
tailwindcss.com

Content

The content option in tailwind.config.js is used with the @apply directive. It specifies the files Tailwind should scan to find class names.

module.exports = {
  content: ['./src/**/*.html'],
}
allround.io

Theme

The theme section of tailwind.config.js is where you define your custom values. You can modify the default theme configuration, add new values, or extend existing ones.

module.exports = {
  theme: {
    colors: {
      'custom-blue': '#2196f3',
    },
  },
}
tailwindcss.com

Screens

You can customize the screen sizes for responsive design in the theme.screens section of tailwind.config.js. By default, Tailwind defines five screen sizes (sm, md, lg, xl, 2xl), but you can add or modify these.

module.exports = {
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
}
tailwindcss.com

Colors

Tailwind comes with a default color palette, but you can customize it in the theme.colors section of tailwind.config.js.

module.exports = {
  theme: {
    colors: {
      'custom-blue': '#2196f3',
    },
  },
}
tailwindcss.com

Spacing

You can customize the spacing/sizing scale in Tailwind in the theme.spacing section of tailwind.config.js.

module.exports = {
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
  },
}
developer.wordpress.org

Plugins

You can extend Tailwind with plugins. Some plugins are provided by Tailwind itself, like @tailwindcss/typography and @tailwindcss/forms, but you can also create your own or use third-party plugins.

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // ...
  ],
}
developer.wordpress.org

Presets

Presets allow you to define a set of default configuration options that can be shared across different projects. A preset is a JavaScript module that exports a configuration object.

module.exports = {
  presets: [
    require('@example/example-tailwind-config'),
  ],
}
wptavern.com




