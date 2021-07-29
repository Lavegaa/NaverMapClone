import React from 'react';
import FavoriteButton from '@components/FavoriteButton';
import { Wrapper } from './FavoriteList.style';

const FavoriteList = () => {
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
  return (
    <Wrapper>
      {sampleFavorite.map((favorite) => (
        <FavoriteButton key={favorite.id} favorite={favorite} />
      ))}
    </Wrapper>
  );
};

export default FavoriteList;
