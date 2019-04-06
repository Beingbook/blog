import React from 'react';
import MuiProvider from './src/container/MuiProvider';

export const withRootElement = ({ element }) => {
  return <MuiProvider> {element} </MuiProvider>;
};
