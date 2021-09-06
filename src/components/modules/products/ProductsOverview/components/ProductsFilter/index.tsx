import * as React from 'react';

import { Button } from 'common/interaction';
import { useProductsContext } from 'modules/products';

import { ProductsFilterContainer } from './styled';

export const ProductsFilter: React.FC = () => {
  const { updateQuality } = useProductsContext();

  return (
    <ProductsFilterContainer>
      <Button onClick={updateQuality} $color="green">
        Filter expired products
      </Button>
      <Button onClick={updateQuality}>
        Next day
      </Button>
    </ProductsFilterContainer>
  );
};

