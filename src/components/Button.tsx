import * as React from 'react';
import styled from 'styled-components';

import { ButtonText } from './Typography';

type Props = JSX.IntrinsicElements['button'];

const Button: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps}>
      <ButtonText>{children}</ButtonText>
    </button>
  );
};

export default styled(Button)`
  min-width: 100px;
  min-height: 36px;
  border: 0;
  box-sizing: border-box;
  background-color: transparent;
`;
