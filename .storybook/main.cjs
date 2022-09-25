// rename to .js once upgraded to storybook 7
module.exports = {
  stories: ['../packages/**/*.stories.@(js|ts|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/web-components',
  // Babel plugin required to avoid decorator conflicts between Storybook and Lit
  // More info: https://github.com/storybookjs/storybook/issues/12369#issuecomment-698221904
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
