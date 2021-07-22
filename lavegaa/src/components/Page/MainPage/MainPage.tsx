import React from 'react';
import NaverMap from '@components/NaverMap';
import { Wrapper, Pannel, MapWrapper } from './MainPage.style';

const MainPage = () => {
  return (
    <Wrapper>
      <Pannel>hello</Pannel>
      <MapWrapper>
        <NaverMap />
      </MapWrapper>
    </Wrapper>
  );
};

export default MainPage;
