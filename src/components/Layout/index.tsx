import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import './styles.css';
import theme from '../../styled/theme';

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <main>{children}</main>
      <Footer>© {new Date().getFullYear()} BaHwan Han</Footer>
    </>
  </ThemeProvider>
);

const Footer = styled.footer`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
`;

export default Layout;
