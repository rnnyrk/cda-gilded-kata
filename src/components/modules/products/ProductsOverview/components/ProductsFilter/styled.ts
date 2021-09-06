import styled from 'styled-components';

import { Button } from 'common/interaction';

export const ProductsFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const ProductsFilterOptions = styled.div`
  display: flex;

  ${Button} {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
