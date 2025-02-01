import ThemeDecorator from './decorators/ThemeDecorator'
import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [ThemeDecorator],
};

export default preview;