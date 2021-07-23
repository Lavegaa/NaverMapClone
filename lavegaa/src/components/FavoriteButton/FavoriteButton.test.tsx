import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
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
  // it('hover', async () => {
  //   const { getByTestId } = render(<FavoriteButton favorite={sampleFavorite} />);
  //   const button = getByTestId('favoriteButton');
  //   fireEvent.mouseOver(button);
  //   const newbutton = await getByTestId('favoriteButton');
  //   await waitFor(() => {
  //     expect(newbutton).toHaveStyle('background: white');
  //   });
  // });
});
