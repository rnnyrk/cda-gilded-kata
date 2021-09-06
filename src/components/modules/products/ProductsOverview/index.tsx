import * as i from 'types';
import React from 'react';

import { Button } from 'common/interaction';

import { Product } from './components';
import { ProductsOverviewContainer, ProductsOverviewGrid } from './styled';

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  items, updateQuality,
}) => {
  return (
    <ProductsOverviewContainer>
      <ProductsOverviewGrid>
        {items.map((item, index) => {
          return <Product key={`item_${index}`} {...{ item, index } } />;
        })}
      </ProductsOverviewGrid>
      <Button onClick={updateQuality}>
        Update quality
      </Button>
    </ProductsOverviewContainer>
  );
};


type ProductsOverviewProps = {
  items: Array<i.Item>;
  updateQuality: () => void;
};
