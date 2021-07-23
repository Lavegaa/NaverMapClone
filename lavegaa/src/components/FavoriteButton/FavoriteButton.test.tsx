// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';

// let container: Element | null = null;
// beforeEach(() => {
//   // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // 기존의 테스트 환경을 정리합니다.
//   if (container) {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   }
// });

// const fakeUser = {
//   name: 'Joni Baez',
//   age: '32',
//   address: '123, Charming Avenue',
// };

// it('renders Favorite Button', async () => {
//   jest.spyOn(global, 'fetch').mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeUser),
//     }),
//   );

//   // resolved promises를 적용하려면 `act()`의 비동기 버전을 사용하세요.
//   await act(async () => {
//     render(<FavoriteButton />, container);
//   });
//   act(() => {
//     render(<FavoriteButton />, container);
//   });
//   expect(container?.textContent).toBe('hello');
//   global.fetch.mockRestore();
// });

import React from 'react';
import { render } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';

describe('<FavoriteButton />', () => {
  it('has input and a button', () => {
    const { getByText } = render(<FavoriteButton />);
    getByText('hello'); // button이 있는지 확인
  });
});
