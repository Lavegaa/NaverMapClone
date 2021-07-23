import React from 'react';
import styled from 'styled-components';
import * as resetStyle from 'asset/css/reset.styled.js';

interface ButtonOption {
  value: string;
  onClick: Function;
}

const StyledButton = styled.input`
  width: 85%;
  height: 45px;
  background-color: ${resetStyle.pColor.blue};
  border: 2px solid ${resetStyle.pColor.blue};
  border-radius: 8px;
  color: white;
  font-weight: 900;
  font-size: ${resetStyle.fontSize.regular};
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: ${resetStyle.pColor.blue};
  }
`;

const Button = ({ value, onClick }: ButtonOption) => {
  return (
    <StyledButton type="button" value={value} onClick={(e) => onClick(e)} />
  );
};

export default Button;
