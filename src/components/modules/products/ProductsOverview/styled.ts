import styled from 'styled-components';
import { media } from 'styles/utils';

import { Container } from 'common/layout';
import { Heading } from 'common/typography';

export const ProductsOverviewContainer = styled(Container)`
  margin: 30px auto;

  ${media.desktop`
    margin-top: 100px;
    padding-top: 60px;
    border-radius: 32px;
  `}
`;

export const ProductsOverviewGrid = styled.div`
  ${media.desktop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  `}
`;

export const ProductsOverviewHeading = styled(Heading)`
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

export const ProductsOverviewEmptyState = styled.span`
  display: inline-block;
  width: 100%;
  padding: 24px;
  text-align: center;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;
