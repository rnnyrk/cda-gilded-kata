import * as i from 'types';
import * as React from 'react';

import { useQueryParams } from 'hooks';
import { Button } from 'common/interaction';
import { useProductsContext } from 'modules/products';

import { ProductsFilterContainer, ProductsFilterOptions } from './styled';

export const ProductsFilter: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams();
  const {
    onUpdateQuality,
    onFilterExpired,
    onFilterQualityIncreased,
    hasExpiredFilter,
    hasOlderFilter,
  } = useProductsContext();

  React.useEffect(() => {
    const newQueryParams = { ...queryParams } as i.UseSetQueryParamsProps;
    const paramKeys = Object.keys(queryParams);

    if (!hasExpiredFilter && paramKeys.includes('expired')) {
      delete newQueryParams.expired;
    } else if (hasExpiredFilter && !paramKeys.includes('expired')) {
      newQueryParams['expired'] = 'true';
    }

    if (!hasOlderFilter && paramKeys.includes('older')) {
      delete newQueryParams.older;
    } else if (hasOlderFilter && !paramKeys.includes('older')) {
      newQueryParams['older'] = 'true';
    }

    setQueryParams(newQueryParams);
  }, [hasExpiredFilter, hasOlderFilter]);

  return (
    <ProductsFilterContainer data-testid="productsFilter">
      <ProductsFilterOptions>
        <Button
          $active={hasExpiredFilter}
          $color="green"
          onClick={onFilterExpired}
          data-testid="productsExpiredBtn"
        >
          No expired products
        </Button>
        <Button
          $active={hasOlderFilter}
          $color="green"
          onClick={onFilterQualityIncreased}
          data-testid="productsOlderBtn"
        >
          The older the better
        </Button>
      </ProductsFilterOptions>
      <Button
        onClick={onUpdateQuality}
        data-testid="productsNextDayBtn"
      >
        Next day
      </Button>
    </ProductsFilterContainer>
  );
};

