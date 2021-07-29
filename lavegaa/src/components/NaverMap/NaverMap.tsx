import React, { useEffect } from 'react';
import { MapWrapper } from './NaverMap.style';

const NaverMap = () => {
  useEffect(() => {
    const initMap = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
    };
    initMap();
  }, []);

  return (
    <>
      <MapWrapper id="map" />
    </>
  );
};

export default NaverMap;
