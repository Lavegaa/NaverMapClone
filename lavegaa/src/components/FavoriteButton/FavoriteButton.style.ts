import styled from 'styled-components';

interface TextPropsType {
  size: string;
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  background: white;
  &:hover {
    background: rgba(0, 0, 0, 0.01);
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
`;

export const Text = styled.span`
  font-size: ${({ size }: TextPropsType) => size};
  color: ${({ color }: TextPropsType) => color}; ;
`;
