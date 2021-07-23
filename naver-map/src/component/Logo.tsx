import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import * as resetStyle from 'asset/css/reset.styled';

const Container = styled.div``;

const LogoImg = styled(FaMapMarkerAlt)`
  font-size: 40px;
`;

const Logo = () => {
  return (
    <Container>
      <LogoImg style={{ color: resetStyle.pColor.red }} />
    </Container>
  );
};

export default Logo;
