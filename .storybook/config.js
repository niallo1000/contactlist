import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-actions/register';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);