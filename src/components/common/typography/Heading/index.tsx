import * as i from 'types';
import styled from 'styled-components';

import { media } from 'styles/utils';

const headingSizes = {
  h1: {
    mobile: '32px',
    desktop: '48px',
  },
  h2: {
    mobile: '26px',
    desktop: '32px',
  },
  h3: {
    mobile: '22px',
    desktop: '26px',
  },
  h4: {
    mobile: '20px',
    desktop: '24px',
  },
};

export const Heading = styled.h1<HeadingProps>`
  font-weight: 700;
  line-height: 100%;
  font-size: ${({ as }) => headingSizes[as || 'h1'].mobile};
  font-family: ${({ theme }) => theme.fonts.poppins};
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
