import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Simple from './Simple';
import WithHeader from './WithHeader';


storiesOf('Sort', module)
  .add('with text', () => (
    <Simple/>
  ))
  .add('with header', () => (
    <WithHeader/>
  ))

