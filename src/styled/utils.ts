import { DefaultTheme } from 'styled-components';

interface SpacingArgs {
  theme: DefaultTheme;
}
export const spacing = (grid: number) => ({ theme }: SpacingArgs) =>
  `${theme.spacing.container * grid}px`;
export const halfSpacing = (grid: number) => ({ theme }: SpacingArgs) =>
  `${theme.spacing.component * grid}px`;
