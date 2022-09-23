// rename to .js once upgraded to storybook 7
module.exports = {
  stories: ['../packages/**/*.stories.@(js|ts|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/web-components',
  babel: async (options) => {
    Object.assign(
      options.plugins.find((plugin) =>
        plugin[0].includes('plugin-proposal-decorators')
      )[1],
      {
        decoratorsBeforeExport: true,
        legacy: false,
      }
    );
    return options;
  },
};
