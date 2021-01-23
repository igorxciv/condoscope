import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTheme } from './themeDecorator';

addDecorator(withKnobs);
addDecorator(withTheme);
