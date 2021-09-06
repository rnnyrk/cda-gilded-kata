import styled from 'styled-components';
import { media } from 'styles/utils';

import { Heading } from 'common/typography';

export const ProductsHeading = styled(Heading)`
  width: 100%;
  margin: 20px 0 0;
  font-size: 32px;
  text-align: center;

  ${media.desktop`
    position: absolute;
    top: 50px;
    left: 0;
    font-size: 80px;
    margin-top: 0;
  `}
`;
