import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Header from './../components/Header';
import BookItemComponent from './../components/BookItem';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const HeaderSite = () => <Header></Header>

const props = {title : 'lallaa'}
export const BookItem = () => <BookItemComponent title={props.title} author='e.volumeInfo.authors'  ></BookItemComponent>