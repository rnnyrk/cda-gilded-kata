import * as i from 'types';
import React from 'react';

import { ProductItem } from './components';

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  items,
}) => (
  <>
    {items.map((item) => {
      return (<ProductItem {...{ item } } />);
    })}
  </>
);

type ProductsOverviewProps = {
  items: Array<i.Item>;
};
