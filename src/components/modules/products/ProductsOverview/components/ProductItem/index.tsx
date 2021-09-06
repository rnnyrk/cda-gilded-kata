import * as i from 'types';
import * as React from 'react';

import { ProductItemContainer } from './styled';

export const ProductItem: React.FC<ProductItemProps> = ({
  item,
}) => {
  return (
    <ProductItemContainer>
      <ul>
        <li>
          <strong>Name:</strong>
          <span>{item.name}</span>
        </li>
        <li>
          <strong>Quality:</strong>
          <span>{item.quality}</span>
        </li>
        <li>
          <strong>Sell in:</strong>
          <span>{item.sellIn}</span>
        </li>
      </ul>
    </ProductItemContainer>
  );
};

type ProductItemProps = {
  item: i.Item;
};
