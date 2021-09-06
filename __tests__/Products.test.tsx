import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Products from 'pages/Products';

import { MockRootWrapper } from './__mocks__/mockRoot';

// Normally I would mock the data, but since it's all local
// and doesn't depend on async calls this is not really needed imo

afterEach(cleanup);

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

test('<Products /> increase quality over time', async () => {
  const {
    findByTestId,
    findAllByTestId,
  } = render(<Products />, { wrapper: MockRootWrapper });

  const nextBtn = await findByTestId('productsNextDayBtn');
  fireEvent.click(nextBtn);

  const headerEl = await findByTestId('productsHeader');
  expect(headerEl.textContent).toBe('Amount of days: 2');

  // Increase for second time and check values of "Aged Brie"
  fireEvent.click(nextBtn);

  const productHeadingEls = await findAllByTestId('productHeading');
  expect(productHeadingEls[1].textContent).toBe('Aged Brie');

  const productQualityEls = await findAllByTestId('productQuality');
  expect(productQualityEls[1].textContent).toBe('2');

  const productSellInEls = await findAllByTestId('productSellIn');
  expect(productSellInEls[1].textContent).toBe('0');

  // Increase another 5, to test isBackstage items <= 10 behaviour
  for (let i = 0; i < 5; i++) {
    fireEvent.click(nextBtn);
  }

  expect(headerEl.textContent).toBe('Amount of days: 8');
  expect(productHeadingEls[5].textContent).toBe('Backstage passes to a TAFKAL80ETC concert');
  expect(productQualityEls[5].textContent).toBe('29');
  expect(productSellInEls[5].textContent).toBe('8');

  // Increase another 5, to test isBackstage items <= 5 behaviour
  for (let i = 0; i < 5; i++) {
    fireEvent.click(nextBtn);
  }

  expect(headerEl.textContent).toBe('Amount of days: 13');
  expect(productQualityEls[5].textContent).toBe('41');
  expect(productSellInEls[5].textContent).toBe('3');
});

test('<Products /> legendaries immutable', async () => {
  const {
    findByTestId,
    findAllByTestId,
  } = render(<Products />, { wrapper: MockRootWrapper });

  const nextBtn = await findByTestId('productsNextDayBtn');

  for (let i = 0; i < 5; i++) {
    fireEvent.click(nextBtn);
  }

  const headerEl = await findByTestId('productsHeader');
  expect(headerEl.textContent).toBe('Amount of days: 6');

  // Check content of legendary items
  const productHeadingEls = await findAllByTestId('productHeading');
  expect(productHeadingEls[3].textContent).toBe('Sulfuras, Hand of Ragnaros');
  expect(productHeadingEls[4].textContent).toBe('Sulfuras, Hand of Ragnaros');

  const productQualityEls = await findAllByTestId('productQuality');
  expect(productQualityEls[3].textContent).toBe('80');
  expect(productQualityEls[4].textContent).toBe('80');

  const productSellInEls = await findAllByTestId('productSellIn');
  expect(productSellInEls[3].textContent).toBe('0');
  expect(productSellInEls[4].textContent).toBe('-1');
});
