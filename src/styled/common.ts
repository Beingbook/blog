import { css } from 'styled-components';
import { spacing } from './utils';

export const container = css`
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};

  /* @media (min-width: 860px) {
    padding-left: 5vw;
    padding-right: 5vw;
  } */

  @media (min-width: 860px) {
    padding-left: calc(50vw - 400px);
    padding-right: calc(50vw - 400px);
  }
`;
