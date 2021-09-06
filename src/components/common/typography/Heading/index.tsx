import * as i from 'types';
import styled from 'styled-components';

import { media } from 'styles/utils';

const headingSizes = {
  h1: {
    mobile: '36px',
    desktop: '72px',
  },
  h2: {
    mobile: '30px',
    desktop: '36px',
  },
  h3: {
    mobile: '24px',
    desktop: '30px',
  },
  h4: {
    mobile: '18px',
    desktop: '24px',
  },
};

export const Heading = styled.h1<HeadingProps>`
  font-weight: 500;
  line-height: 100%;
  font-size: ${({ as }) => headingSizes[as || 'h1'].mobile};
  font-family: ${({ theme }) => theme.fonts.poppins};
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color || 'black']};
  margin: ${({ margin }) => margin || '24px 0'};

  ${media.desktop<HeadingProps>`
    font-size: ${(props) => headingSizes[props.as || 'h1'].desktop};
  `}
`;

type HeadingProps = {
  color?: i.HeadingColors;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  margin?: string;
};
