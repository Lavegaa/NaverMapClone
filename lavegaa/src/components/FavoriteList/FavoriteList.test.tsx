import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FavoriteList from './FavoriteList';

describe('FavoriteButton', () => {
  const sampleFavorite = [
    {
      id: 1,
      favoritename: '맛집 리스트',
      ownerid: 1,
      createdtime: '2021-07-16T14:28:58.000Z',
      length: 4,
    },
    {
      id: 2,
      favoritename: '영화관 리스트',
      ownerid: 1,
      createdtime: '2021-07-16T14:28:58.000Z',
      length: 6,
    },
  ];
  it('has title and count', () => {
    const { getByText } = render(<FavoriteList />);
    getByText('맛집 리스트');
    getByText('4');
    getByText('영화관 리스트');
    getByText('6');
  });
});
