import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from '@storybook/angular';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../../../packages/*/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../../../packages/*/src/lib/**/*.mdx', '../stories/**/*.stories.ts', '../doc/**/*.mdx'],
  addons: [getAbsolutePath("@storybook/addon-docs")],
  framework: {
    name: getAbsolutePath("@storybook/angular"),
    options: {},
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
