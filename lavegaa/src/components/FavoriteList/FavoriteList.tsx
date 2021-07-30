import React, { useEffect } from 'react';
import FavoriteButton from '@components/FavoriteButton';
import { Wrapper } from './FavoriteList.style';
import { useFavorite } from './useFavoriteQuery';

const FavoriteList = () => {
  const { status, data, error } = useFavorite('1');

  return (
    <Wrapper>
      {data?.map((favorite) => (
        <FavoriteButton key={favorite.id} favorite={favorite} />
      ))}
    </Wrapper>
  );
};

export default FavoriteList;
