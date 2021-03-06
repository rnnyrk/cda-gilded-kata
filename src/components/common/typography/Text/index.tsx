import * as i from 'types';
import styled from 'styled-components';

export const Text = styled.p<TextDefaultProps>`
  line-height: 110%;
  font-size: ${({ $size }) => $size || 14}px;
  font-weight: ${({ $weight }) => $weight || 400};
  color: ${({ theme, $color }) => theme.colors[$color || 'black']};
  margin: ${({ $margin }) => $margin || 0};
  letter-spacing: -0.01em;

  & > a {
    color: ${({ theme, $color }) => theme.colors[$color || 'black']};
    text-decoration: underline;
  }
`;

export type TextDefaultProps = {
  $color?: i.ColorsFromTheme<'black' | 'white'>;
  $margin?: string;
  $size?: 12 | 14 | 16 | 18 | 20;
  $weight?: 400 | 600 | 700;
};
