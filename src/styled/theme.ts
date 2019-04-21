import { DefaultTheme } from 'styled-components';

const common: Omit<DefaultTheme, 'color'> = {
  maxContentWidth: 640,
  breakpoints: {
    phone: 480,
    tablet: 768,
    desktop: 992,
  },
  fontSize: {
    conversionRatio: 0.0625,
    unit: 'rem',
  },
  easing: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
  },
  spacing: {
    container: 8,
    component: 4,
  },
};

export const whiteTheme: DefaultTheme = {
  ...common,
  color: {
    background: '#fff',
    text: '#222',
    primary: '#00695c',
    secondary: '#f50057',
    link: '#f50057',
    linkActive: '#f50057',
    linkFocus: '#f50057',
    linkHover: '#f50057',
    linkVisited: '#f50057',
  },
};

export const darkTheme: DefaultTheme = {
  ...common,
  color: {
    background: '#282c35',
    text: 'rgba(255, 255, 255, 0.88)',
    primary: '#00695c',
    secondary: '#d84315',
    link: '#ff80ab',
    linkActive: '#ff80ab',
    linkFocus: '#ff80ab',
    linkHover: '#ff80ab',
    linkVisited: '#ff80ab',
  },
};
