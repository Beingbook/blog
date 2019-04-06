import React from 'react';
import MuiProvider from './src/container/MuiProvider';

export const wrapRootElement = ({ element }) => {
  return <MuiProvider>{element}</MuiProvider>;
};
