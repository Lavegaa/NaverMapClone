import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = ({ ...props }) => {
  return <StyledContainer {...props} />;
};

export default Container;
