import styled from 'styled-components';
import { media } from 'styles/utils';

import { Container } from 'common/layout';
import { Button } from 'common/interaction';

export const ProductsOverviewContainer = styled(Container)`
  margin-top: 30px;

  ${Button} {
    width: 100%;
    padding: 16px;
    border-radius: ${({ theme }) => theme.ui.borderRadius.default};
  }

  ${media.desktop`
    margin-top: 100px;
    padding-top: 60px;
    border-radius: 32px;

    ${Button} {
      padding: 24px;
    }
  `}
`;

export const ProductsOverviewGrid = styled.div`
  margin-bottom: 16px;

  ${media.desktop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  `}
`;
