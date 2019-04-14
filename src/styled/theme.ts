import { DefaultTheme } from 'styled-components';

const common: Omit<DefaultTheme, 'color'> = {
  maxContentWidth: 760,
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
    secondary: '#c51162',
    link: '#c51162',
    linkActive: '#c51162',
    linkFocus: '#c51162',
    linkHover: '#c51162',
    linkVisited: '#c51162',
  },
};

export const darkTheme: DefaultTheme = {
  ...common,
  color: {
    background: '#282c35',
    text: '#fff',
    primary: '#00695c',
    secondary: '#d84315',
    link: '#F3A68C',
    linkActive: '#F3A68C',
    linkFocus: '#F3A68C',
    linkHover: '#F3A68C',
    linkVisited: '#F3A68C',
  },
};
