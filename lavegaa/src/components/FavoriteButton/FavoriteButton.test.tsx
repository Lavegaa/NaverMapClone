import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import FavoriteButton from './FavoriteButton';

let container: Element | null = null;
beforeEach(() => {
  // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // 기존의 테스트 환경을 정리합니다.
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it('renders Favorite Button', () => {
  act(() => {
    render(<FavoriteButton />, container);
  });
  expect(container?.textContent).toBe('hello');
});
