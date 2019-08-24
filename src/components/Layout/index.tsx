import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
} from 'styled-components';
import { Helmet } from 'react-helmet';
import { Location } from 'history';
import { Link } from 'gatsby';
import SEO from '../SEO';

import './fonts.css';
import './styles.css';

import { darkTheme } from '../../styled/theme';
import { Body2, ButtonText } from '../Typography';
import { spacing, halfSpacing } from '../../styled/utils';
import HomeIcon from './HomeIcon';
import { container } from '../../styled/common';


interface Props {
  location?: Location;
}

const Layout: React.FC<Props> = (props) => {
  const { children, location } = props;

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyle />
        <Helmet htmlAttributes={{ lang: 'ko' }} />
        <SEO title="Beingbook's blog" />
        <Flex>
          <Header>
            <Nav>
              <PrimaryMenu>
                <li>
                  <MenuLink to="/">
                    <ButtonText aria-label="홈 화면으로 돌아가기">
                      <HomeIcon />
                    </ButtonText>
                  </MenuLink>
                </li>
              </PrimaryMenu>
            </Nav>
          </Header>
          <Content key={location && location.pathname}>{children}</Content>
          <Footer>
            <Body2 as="div">
              © 2019 ~ Present,{' '}
              <a href="mailto:beingbook@gmail.com">
                한바환 (beingbook@gmail.com)
              </a>
            </Body2>
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

  svg {
    fill: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.text};
    transition:
      fill 0.2s ${({ theme }) => theme.easing.standard},
      color 0.2s ${({ theme }) => theme.easing.standard};
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

const MenuLink = styled(Link)`
  padding: ${spacing(2)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${spacing(6)};
  min-height: ${spacing(4)};
  box-sizing: border-box;

  span {
    display: flex;
  }
`;

const Menu = styled.ul`
  position: relative;

  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  li {
    display: block;
    margin: 0;
    padding: 0;

    &:not(:first-child) {
      margin-left: ${halfSpacing(2)};
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

const Content = styled.main`
  flex: 1 1 auto;
  padding: ${spacing(2)};
  ${container};
`;

const Footer = styled.footer`
  padding: ${spacing(3)} 0;
  ${container};
  text-align: right;

  a {
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Header = styled.header`
  @media (min-width: 860px) {
    padding-left: calc(50vw - 400px - ${spacing(2)});
    padding-right: calc(50vw - 400px - ${spacing(2)});
  }
`;

const Nav = styled.div`
  display: flex;
`;

export default Layout;
