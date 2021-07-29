import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FavoriteList from './FavoriteList';

export default {
  title: 'LeftPannel/FavoriteList',
  component: FavoriteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FavoriteList>;

const Template: ComponentStory<typeof FavoriteList> = (args: any) => <FavoriteList {...args} />;

export const Basic = Template.bind({});
