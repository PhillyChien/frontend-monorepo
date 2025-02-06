import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../../ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../application-form/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../application-section/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
};
export default config;
