import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Simple from './Simple';


storiesOf('Simple', module)
  .add('with text', () => (
    <Simple/>
  ))
