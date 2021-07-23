import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FavoriteButton from './FavoriteButton';

export default {
  title: 'LeftPannel/FavoriteButton',
  component: FavoriteButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FavoriteButton>;

const Template: ComponentStory<typeof FavoriteButton> = (args: any) => <FavoriteButton {...args} />;

const sampleFavorite = {
  id: 1,
  favoritename: '맛집 리스트',
  ownerid: 1,
  createdtime: '2021-07-16T14:28:58.000Z',
  length: 4,
};

export const Basic = Template.bind({});
Basic.args = {
  favorite: sampleFavorite,
};
