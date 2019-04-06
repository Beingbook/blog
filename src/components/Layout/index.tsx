import React from 'react';

import './styles.css';
import Wrapper from '../Wrapper';

const Layout: React.FC = ({ children }) => (
  <>
    <main>{children}</main>
    <Wrapper as="footer">© {new Date().getFullYear()} BaHwan Han</Wrapper>
  </>
);

export default Layout;
