import * as i from 'types';
import * as React from 'react';

import { Heading } from 'common/typography';

import { ProductContainer, ProductMeta, ProductMetaItem } from './styled';

export const Product: React.FC<ProductProps> = ({
  item,
}) => {
  return (
    <ProductContainer>
      <Heading as="h4" margin="0">
        {item.name}
      </Heading>
      <ProductMeta>
        <ProductMetaItem>
          <strong>Quality</strong>
          <span>{item.quality}</span>
        </ProductMetaItem>
        <ProductMetaItem>
          <strong>Sell in</strong>
          <span>{item.sellIn}</span>
        </ProductMetaItem>
      </ProductMeta>
    </ProductContainer>
  );
};

type ProductProps = {
  item: i.Item;
};
