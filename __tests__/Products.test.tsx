import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Products from 'pages/Products';

import { MockRootWrapper } from './__mocks__/mockRoot';

// Normally I would mock the data, but since it's all local
// and doesn't depend on async calls this is not really needed imo

afterEach(() => cleanup);

test('<Products /> correct render', async () => {
  const {
    findByTestId,
    findAllByTestId,
  } = render(<Products />, { wrapper: MockRootWrapper });

  const headerEl = await findByTestId('productsHeader');
  expect(headerEl).toBeTruthy();
  expect(headerEl.textContent).toBe('Amount of days: 1');

  const productEls = await findAllByTestId('product');
  expect(productEls.length).toBe(9);

  const nextBtn = await findByTestId('productsNextDayBtn');
  expect(nextBtn).toBeTruthy();
});

test('<Products /> next day', async () => {
  const {
    findByTestId,
  } = render(<Products />, { wrapper: MockRootWrapper });

  const nextBtn = await findByTestId('productsNextDayBtn');
  fireEvent.click(nextBtn);

  const headerEl = await findByTestId('productsHeader');
  expect(headerEl.textContent).toBe('Amount of days: 2');
});
