import React from 'react';
import styled from 'styled-components';
import Container from 'component/Container';
import * as resetStyle from 'asset/css/reset.styled.js';
import Logo from 'component/Logo';
import InputBox from 'component/InputBox';
import Button from 'component/Button';
import { useState } from 'react';

const LoginBlock = styled.div`
  width: 25%;
  height: 70vh;
  border-radius: 8px;
  transition: 0.1s;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const LoginTop = styled.div`
  width: 100%;
  text-align: center;
`;

const LoginMiddle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10% 0 5%;
`;

const LoginBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.h1`
  line-height: 1.4;
  font-size: ${resetStyle.fontSize.large};
  color: #333;
`;

const Home = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const onChange = (e: any) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onValidate();
    }
  };

  const onValidate = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (email.match(regExp) != null) {
      setIsError(false);
      localStorage.setItem('token', email);
      window.location.href = '/main';
    } else {
      setIsError(true);
    }
  };

  return (
    <Container style={{ backgroundColor: resetStyle.pColor.blue }}>
      <LoginBlock>
        <Wrapper>
          <LoginTop>
            <Logo />
            <Content>
              나만의 장소를
              <br />
              Pick Map 하세요!
            </Content>
          </LoginTop>
          <LoginMiddle>
            <InputBox
              title="이메일"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={onChange}
              onKeyPress={onKeyPress}
              msg={isError ? '올바르지 않은 이메일 형식입니다.' : ''}
            />
          </LoginMiddle>
          <LoginBottom>
            <Button value="로그인" onClick={onValidate} />
          </LoginBottom>
        </Wrapper>
      </LoginBlock>
    </Container>
  );
};

export default Home;
