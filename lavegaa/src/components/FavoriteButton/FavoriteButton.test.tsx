import React from 'react';
import { render } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';

describe('FavoriteButton', () => {
  const sampleFavorite = {
    id: 1,
    favoritename: '맛집 리스트',
    ownerid: 1,
    createdtime: '2021-07-16T14:28:58.000Z',
    length: 4,
  };
  it('has title and count', () => {
    const { getByText } = render(<FavoriteButton favorite={sampleFavorite} />);
    getByText('맛집 리스트');
    getByText('4');
  });
});
