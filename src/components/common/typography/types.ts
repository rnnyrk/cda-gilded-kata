import * as i from 'types';

export type HeadingColors = i.ColorsFromTheme<'black' | 'white'>;
export type TextColors = i.ColorsFromTheme<'black' | 'white'>;

export type TextDefaultProps = {
  $size?: 12 | 14 | 16 | 18 | 20;
  $weight?: 400 | 600 | 700;
  $lineHeight?: number;
  $margin?: string;
  $color?: i.TextColors;
};
