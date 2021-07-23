import React from 'react';
import { Wrapper, TextWrapper, Text } from './FavoriteButton.style';

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
      <Wrapper data-testid="favoriteButton">
        <TextWrapper>
          <Text size="16px" color="black">
            {favorite.favoritename}
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Text size="14px" color="blue">
            {favorite.length}
            <Text size="14px" color="black">
              개
            </Text>
          </Text>
        </TextWrapper>
      </Wrapper>
    </>
  );
};

export default FavoriteButton;
