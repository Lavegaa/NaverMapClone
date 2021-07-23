import React, { useState } from 'react';
import styled from 'styled-components';
import * as resetStyle from 'asset/css/reset.styled.js';

interface InputBoxOptions {
  title?: string;
  placeholder: string;
  value: string;
  onChange: Function;
  onKeyPress?: Function;
  msg?: string;
}

interface InputBlockOption {
  isFocus: boolean;
}

const Container = styled.div`
  width: 85%;
`;

const Title = styled.label`
  color: #767676;
  font-size: ${resetStyle.fontSize.small};
  font-weight: 400;
`;

const InputBlock = styled.div<InputBlockOption>`
  width: 100%;
  border: ${({ isFocus }) =>
    isFocus ? '1px solid #9F9F9F' : '1px solid #dfdfdf'};
  padding: 0 5px;
  margin: 5px 0;
  border-radius: 4px;
  transition: 0.3s;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  font-size: ${resetStyle.fontSize.small};
  color: #333;
  font-weight: 600;

  &:focus {
    outline: none;
  }
`;

const Message = styled.p`
  font-size: ${resetStyle.fontSize.small};
  margin: 0;
  color: ${resetStyle.notiColor.error};
`;

const InputBox = ({
  title,
  placeholder,
  value,
  onChange,
  onKeyPress,
  msg,
}: InputBoxOptions) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <InputBlock isFocus={isFocus}>
        <StyledInput
          type="text"
          value={value}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => onChange(e)}
          onKeyPress={(e) => onKeyPress && onKeyPress(e)}
        />
      </InputBlock>
      {msg !== '' && <Message>{msg}</Message>}
    </Container>
  );
};

export default InputBox;
