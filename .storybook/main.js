module.exports = {
  stories: ['../packages/**/*.stories.@(js|ts|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/web-components',
};
