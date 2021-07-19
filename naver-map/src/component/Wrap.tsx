import React from 'react';
import styled from 'styled-components';

interface WrapOption {
  children: JSX.Element;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = ({ children }: WrapOption) => {
  return <Container>{children}</Container>;
};

export default Wrap;
