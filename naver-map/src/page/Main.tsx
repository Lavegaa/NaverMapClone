import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'component/Container';
import * as resetStyle from 'asset/css/reset.styled.js';
import { BiSearch } from 'react-icons/bi';
import { getGeocodeBySearchText } from 'repository/mapRepository';

const Map = styled.div`
  width: 100%;
  height: 100vh;
`;

const SearchBlock = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 50px;
  background-color: white;
  box-shadow: 1px 1px 5px #848484;
  border-radius: 25px;
  overflow: hidden;
  padding: 0 25px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: ${resetStyle.fontSize.regular};
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled(BiSearch)`
  font-size: ${resetStyle.fontSize.large};
  margin-left: 10px;
  color: #585858;
  cursor: pointer;

  &:hover {
    color: #848484;
  }
`;

const Main = () => {
  const [searchText, setSearchText] = useState('');

  const initMap = async () => {
    await getLocation().then((coords: any) => {
      new naver.maps.Map('map', {
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

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const onSearch = () => {
    getGeocodeBySearchText().then((response: any) => {
      console.log(response);
    });
  };

  useEffect(() => {
    initMap();
  });

  return (
    <Container>
      <Map id="map"></Map>
      <SearchBlock>
        <SearchInput
          type="text"
          placeholder="Pick Map 지도 검색"
          value={searchText}
          onChange={({ target }) => {
            setSearchText(target.value);
          }}
          onKeyPress={(e) => onKeyPress(e)}
        />
        <SearchBtn />
      </SearchBlock>
    </Container>
  );
};

export default Main;
