module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    'storybook-css-modules',
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  features: {
    postcss: false,
  },
}
