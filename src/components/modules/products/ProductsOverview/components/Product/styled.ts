import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from 'styles/utils';

import { Heading } from 'common/typography';

export const ProductContainer = styled(motion.div)`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.ui.borderRadius.default};

  ${Heading} {
    flex-basis: 100%;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  ${media.desktop`
    margin-bottom: 0;
    transition: transform 300ms;

    &:before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 300ms;
      border-radius: ${({ theme }) => theme.ui.borderRadius.default};
      background-color: ${({ theme }) => theme.colors.blue};
    }

    &:hover {
      transform: translate(5px, -5px);

      &:before {
        transform: translate(-10px, 10px);
      }
    }

    &:nth-child(even) {
      &:before {
        background-color: ${({ theme }) => theme.colors.green};
      }

      &:hover {
        transform: translate(-5px, 5px);

        &:before {
          transform: translate(10px, -10px);
        }
      }
    }
  `}
`;

export const ProductContent = styled.div`
  width: 100%;
  align-self: stretch
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
  text-align: center;
  border-radius: ${({ theme }) => theme.ui.borderRadius.default};
  background-color: ${({ theme }) => theme.colors.pale};
  border: 1px solid ${({ theme }) => theme.colors.gray};
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
