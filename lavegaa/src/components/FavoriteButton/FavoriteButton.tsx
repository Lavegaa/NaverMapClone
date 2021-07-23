import React from 'react';

interface favoriteType {
  id: number;
  favoritename: string;
  ownerid: number;
  createdtime: string;
  length: number;
}

interface FavoriteButtonProps {
  favorite: favoriteType;
}

const FavoriteButton = ({ favorite }: FavoriteButtonProps) => {
  return (
    <>
      <h1>{favorite.favoritename}</h1>
      <h1>{favorite.length}</h1>
    </>
  );
};

export default FavoriteButton;
