import styled from 'styled-components';

import { Heading } from 'common/typography';

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.pale};
  text-align: center;

  ${Heading} {
    flex-basis: 100%;
    margin-bottom: 16px;
  }
`;

export const ProductMeta = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductMetaItem = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;
