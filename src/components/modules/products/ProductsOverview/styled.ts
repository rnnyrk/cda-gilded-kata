import styled from 'styled-components';

import { Container } from 'common/layout';
import { Button } from 'common/interaction';

export const ProductsOverviewContainer = styled(Container)`
  margin-top: 100px;
  padding-top: 60px;
  border-radius: 32px;

  ${Button} {
    width: 100%;
    padding: 24px;
    border-radius: ${({ theme }) => theme.ui.borderRadius.default};
  }
`;

export const ProductsOverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin-bottom: 16px;
`;
