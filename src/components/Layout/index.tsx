import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  keyframes,
  css,
} from 'styled-components';

import './styles.css';
import { darkTheme, whiteTheme } from '../../styled/theme';
import Helmet from 'react-helmet';
import { Body2 } from '../Typography';
import { Location } from 'history';
import { spacing } from '../../styled/utils';

interface Props {
  location: Location;
}
const Layout: React.FC<Props> = ({ children, location }) => {
  const [colorSchema, setColorSchema] = React.useState<'dark' | 'white'>(
    'dark',
  );
  return (
    <ThemeProvider theme={colorSchema === 'dark' ? darkTheme : whiteTheme}>
      <>
        <GlobalStyle />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500|Roboto:300,400,500&amp;subset=korean"
            rel="stylesheet"
          />
        </Helmet>
        <Flex>
          <nav>
            <ul>
              <li>Menu</li>
              <li>Menu</li>
              <li>Menu</li>
            </ul>
            <ul>
              <li>
                <input
                  type="checkbox"
                  checked={colorSchema === 'dark'}
                  onChange={(event) =>
                    setColorSchema(event.target.checked ? 'dark' : 'white')
                  }
                />
              </li>
            </ul>
          </nav>
          <Content key={location.pathname}>{children}</Content>
          <Footer>
            <Wrapper>
              <Body2 as="div">
                © 2019 ~ Present,{' '}
                <a href="mailto:beingbook@gmail.com">
                  한바환 (beingbook@gmail.com)
                </a>
              </Body2>
            </Wrapper>
          </Footer>
        </Flex>
      </>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    height: 100%;
  }

  #___gatsby {
    > div {
      height: 100%;
    }
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.color.background};
      color: ${theme.color.text};
      transition: background-color 0.2s ${theme.easing.standard},
        color 0.2s ${theme.easing.standard};
    `}
  }

  a {
    text-decoration: none;
    ${({ theme }) => css`
      color: ${theme.color.link};

      &:focus {
        color: ${theme.color.linkFocus};
      }

      &:hover {
        color: ${theme.color.linkHover};
      }

      &:active {
        color: ${theme.color.linkActive};
      }

      &:visited {
        color: ${theme.color.linkVisited};
      }
      transition: color 0.2s ${theme.easing.standard};
    `}
  }
`;

const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
  animation: ${slideIn} 0.364s cubic-bezier(0.1, 0.9, 0.2, 1);
`;

const Footer = styled.footer`
  overflow: hidden;
  padding: ${spacing(4)} ${spacing(2)};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
`;

export default Layout;
