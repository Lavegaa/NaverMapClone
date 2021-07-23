import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FavoriteButton from './FavoriteButton';

export default {
  title: 'FavoriteButton',
  component: FavoriteButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FavoriteButton>;

const Template: ComponentStory<typeof FavoriteButton> = (args: any) => <FavoriteButton {...args} />;

const sampleFavorite = {
  id: 1,
  favoriteName: '맛집 리스트',
  ownerId: 1,
  createdTime: '2021-07-16T14:28:58.000Z',
  length: 4,
};

export const Primary = Template.bind({});
Primary.args = {
  favorite: sampleFavorite,
};
