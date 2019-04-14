import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  keyframes,
  css,
} from 'styled-components';
import { Helmet } from 'react-helmet';
import { Location } from 'history';
import { Link } from 'gatsby';

import './styles.css';

import { darkTheme, whiteTheme } from '../../styled/theme';
import { Body2, ButtonText } from '../Typography';
import { spacing, halfSpacing } from '../../styled/utils';
import useInputState from '../../hooks/useInputState';

interface Props {
  location?: Location;
}
const Layout: React.FC<Props> = (props) => {
  const { children, location } = props;
  const [preferDarkColor, preferDarkColorHandler] = useInputState(false);
  React.useEffect(() => void 0, []);
  return (
    <ThemeProvider theme={preferDarkColor ? darkTheme : whiteTheme}>
      <>
        <GlobalStyle />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500|Roboto:300,400,500&amp;subset=korean"
            rel="stylesheet"
          />
        </Helmet>
        <Flex>
          <Header>
            <nav>
              <NavWrapper>
                <PrimaryMenu>
                  <li>
                    <Link to="/">
                      <ButtonText>홈</ButtonText>
                    </Link>
                  </li>
                  <li>
                    <Link to="/me">
                      <ButtonText>소개</ButtonText>
                    </Link>
                  </li>
                </PrimaryMenu>
                <Menu>
                  <li>
                    <input
                      type="checkbox"
                      checked={preferDarkColor}
                      onChange={preferDarkColorHandler}
                    />
                  </li>
                </Menu>
              </NavWrapper>
            </nav>
          </Header>
          <Content key={location && location.pathname}>{children}</Content>
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

const Menu = styled.ul`
  position: relative;

  margin: 0;
  padding: 0;
  display: flex;

  li {
    display: block;

    &:not(:first-child) {
      margin-left: ${halfSpacing(6)};
    }
  }
`;

const PrimaryMenu = styled(Menu)`
  flex: 1 1 auto;
`;

const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const slideIn = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
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

const Header = styled.header`
  padding: ${spacing(4)} ${spacing(2)};
`;

const NavWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
`;

export default Layout;
