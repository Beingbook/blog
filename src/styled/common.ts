import { css } from 'styled-components';
import { spacing } from './utils';

export const container = css`
  padding-left: ${spacing(3)};
  padding-right: ${spacing(3)};

  @media (min-width: 860px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }

  @media (min-width: 1600px) {
    padding-left: calc(50vw - 800px);
    padding-right: calc(50vw - 800px);
  }
`;
