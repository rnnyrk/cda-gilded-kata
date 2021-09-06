import * as i from 'types';
import React from 'react';

import { Product } from './components';
import { ProductsOverviewContainer } from './styled';

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  items,
}) => (
  <ProductsOverviewContainer>
    {items.map((item) => {
      return (<Product {...{ item } } />);
    })}
  </ProductsOverviewContainer>
);

type ProductsOverviewProps = {
  items: Array<i.Item>;
};
