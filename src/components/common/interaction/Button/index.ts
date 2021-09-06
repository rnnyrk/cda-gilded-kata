import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue};
  border: 2px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color .2s, color .2s;
  border-radius: ${({ theme }) => theme.ui.borderRadius.default};

  ${({ $active }) => $active && css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  `};

  ${({ $size }) => $size === 'square' && css`
    width: 40px;
    padding: 0;
  `};

  ${({ $color }) => $color === 'green' && css`
    color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
  `};

  ${media.desktop<ButtonProps>`
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};

      ${({ $color }) => $color === 'green' && css`
        background-color: ${({ theme }) => theme.colors.green};
      `};
    }
  `}
`;

type ButtonProps = {
  $active?: boolean;
  $color?: i.ColorsFromTheme<'green'>;
  $size?: 'square';
};
