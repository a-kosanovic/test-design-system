import {esbuildPlugin} from '@web/dev-server-esbuild';
import {globbySync} from 'globby';

export default {
  // files: 'packages/**/src/**/*.test.ts',
  rootDir: '.',
  nodeResolve: true,
  plugins: [esbuildPlugin({ts: true})],
  testRunnerHtml: (testFramework) =>
    `<html>
      <body>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
  // Create a named group for every test file to enable running single tests.
  // If a test file is `split-panel.test.ts` then you can run `npm run test -- --group split-panel` to run only that file's tests
  groups: globbySync('packages/**/src/**/*.test.ts').map((path) => {
    const groupName = path.match(/^.*\/(?<fileName>.*)\.test\.ts/).groups
      .fileName;
    return {
      name: groupName,
      files: path,
    };
  }),
};
