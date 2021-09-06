import * as i from 'types';
import * as React from 'react';

import { ProductItemContainer } from './styled';

export const ProductItem: React.FC<ProductItemProps> = ({
  item,
}) => {
  return (
    <ProductItemContainer>
      {item.name}
      {item.quality}
      {item.sellIn}
    </ProductItemContainer>
  );
};

type ProductItemProps = {
  item: i.Item;
};
