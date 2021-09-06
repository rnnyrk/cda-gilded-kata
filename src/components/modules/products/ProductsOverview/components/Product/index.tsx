import * as i from 'types';
import * as React from 'react';

import { Heading } from 'common/typography';

import { ProductVariants } from './variants';
import {
  ProductContainer,
  ProductMeta,
  ProductMetaItem,
  ProductContent,
} from './styled';

export const Product: React.FC<ProductProps> = ({
  item, index,
}) => {
  return (
    <ProductContainer
      initial="hidden"
      animate="visible"
      custom={index}
      variants={ProductVariants}
      data-testid="product"
    >
      <ProductContent>
        <Heading as="h4" $margin="0">
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
      </ProductContent>
    </ProductContainer>
  );
};

type ProductProps = {
  item: i.Item;
  index: number;
};
