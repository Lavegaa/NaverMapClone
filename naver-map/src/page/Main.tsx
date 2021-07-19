import React, { useEffect } from 'react';
import styled from 'styled-components';

const Map = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = () => {
  const initMap = async () => {
    await getLocation().then((coords: any) => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(coords.latitude, coords.longitude),
        zoom: 13,
      });
    });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          function (error) {
            resolve({
              latitude: 37.3595704,
              longitude: 127.105399,
            });
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity,
          },
        );
      });
    } else {
      return new Promise((resolve) => {
        resolve({
          latitude: 37.3595704,
          longitude: 127.105399,
        });
      });
    }
  };

  useEffect(() => {
    initMap();
  }, []);

  return <Map id="map"></Map>;
};

export default Main;
