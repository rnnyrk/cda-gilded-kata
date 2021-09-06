import React from 'react';

import { useProductsContext } from 'modules/products';

import { Product, ProductsFilter } from './components';
import {
  ProductsOverviewContainer,
  ProductsOverviewEmptyState,
  ProductsOverviewGrid,
  ProductsOverviewHeading,
} from './styled';

export const ProductsOverview: React.FC = () => {
  const { currentDay, items } = useProductsContext();

  return (
    <>
      <ProductsOverviewHeading>
        Amount of days: {currentDay}
      </ProductsOverviewHeading>
      <ProductsOverviewContainer>
        <ProductsFilter />
        {items && items.length > 0 ? (
          <ProductsOverviewGrid>
            {items.map((item, index) => {
              const key = `item_${index}`;
              return <Product {...{ key, item, index }} />;
            })}
          </ProductsOverviewGrid>
        ) : (
          <ProductsOverviewEmptyState>
            No more products to show...
          </ProductsOverviewEmptyState>
        )}
      </ProductsOverviewContainer>
    </>
  );
};
