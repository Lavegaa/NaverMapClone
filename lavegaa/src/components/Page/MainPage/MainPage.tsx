import React from 'react';
import NaverMap from '@components/NaverMap';
import FavoriteList from '@src/components/FavoriteList';
import { Wrapper, Pannel, MapWrapper } from './MainPage.style';

const MainPage = () => {
  return (
    <Wrapper>
      <Pannel>
        <FavoriteList />
      </Pannel>
      <MapWrapper>
        <NaverMap />
      </MapWrapper>
    </Wrapper>
  );
};

export default MainPage;
