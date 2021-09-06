import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Heading } from 'common/typography';

export const ProductContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
  border-radius: ${({ theme }) => theme.ui.borderRadius.default};
  background-color: ${({ theme }) => theme.colors.pale};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: center;

  ${Heading} {
    flex-basis: 100%;
    margin-bottom: 24px;
    text-transform: uppercase;
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
  font-size: 20px;
`;
