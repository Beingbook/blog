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
import HomeIcon from './HomeIcon';
import { container } from '../../styled/common';

interface Props {
  location?: Location;
}
const Layout: React.FC<Props> = (props) => {
  const { children, location } = props;
  const [preferDarkColor, preferDarkColorHandler] = useInputState(() => {
    if (typeof localStorage !== 'undefined') {
      return !!JSON.parse(localStorage.getItem('preferDarkColor') || 'false');
    }
    return false;
  });
  React.useEffect(() => {
    localStorage.setItem('preferDarkColor', JSON.stringify(preferDarkColor));
  }, [preferDarkColor]);
  return (
    <ThemeProvider theme={preferDarkColor ? darkTheme : whiteTheme}>
      <>
        <GlobalStyle />
        <Helmet htmlAttributes={{ lang: 'ko' }}>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500|Roboto:300,400,500&amp;subset=korean"
            rel="stylesheet"
          />
        </Helmet>
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
              <Menu>
                <li role="presentation">
                  <ToggleLabel
                    role="button"
                    aria-label="어두운 테마 사용"
                    aria-pressed={preferDarkColor}
                  >
                    <input
                      type="checkbox"
                      checked={preferDarkColor}
                      onChange={preferDarkColorHandler}
                    />
                    <ButtonText>
                      {preferDarkColor ? '어스름' : '빛벼림'}
                    </ButtonText>
                    <img
                      src={
                        preferDarkColor
                          ? require('./images/moon.svg')
                          : require('./images/sun.svg')
                      }
                      role="presentation"
                    />
                  </ToggleLabel>
                </li>
              </Menu>
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

const ToggleLabel = styled.label`
  position: relative;
  cursor: pointer;
  padding: ${spacing(2)};
  display: inline-flex;
  align-items: center;
  transition: opacity 0.1s ${({ theme }) => theme.easing.standard};
  touch-action: manipulation;
  user-select: none;

  img {
    margin: 0;
    margin-left: ${halfSpacing(2)};
    padding: 0;
    transform: rotate(0deg);
    transition: transform 0.1s ${({ theme }) => theme.easing.standard};
  }

  &:hover {
    img {
      transform: rotate(20deg);
    }
  }

  input {
    position: absolute;
    left: -9999px;
    top: -9999px;

    &:focus ~ img {
      transform: rotate(20deg);
    }
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

const slideIn = keyframes`
  from {
    transform: translateY(30%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Content = styled.main`
  flex: 1 1 auto;
  padding: ${spacing(2)};
  ${container};
  animation: ${slideIn} 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
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
