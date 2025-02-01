import ThemeDecorator from './decorators/ThemeDecorator'
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#2B2B2B' },
      ],
      default: 'Dark',
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;