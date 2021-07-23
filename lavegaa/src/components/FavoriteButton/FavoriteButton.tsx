import React from 'react';

interface favoriteType {
  id: number;
  favoriteName: string;
  ownerId: number;
  createdTime: string;
  length: number;
}

interface FavoriteButtonProps {
  favorite: favoriteType;
}

const FavoriteButton = ({ favorite }: FavoriteButtonProps) => {
  return (
    <>
      <h1>{favorite.favoriteName}</h1>
      <h1>{favorite.length}</h1>
    </>
  );
};

export default FavoriteButton;
