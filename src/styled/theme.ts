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
    secondary: '#304ffe',
    link: '#304ffe',
    linkActive: '#304ffe',
    linkFocus: '#304ffe',
    linkHover: '#304ffe',
    linkVisited: '#304ffe',
  },
};

export const darkTheme: DefaultTheme = {
  ...common,
  color: {
    background: '#282c35',
    text: 'rgba(255, 255, 255, 0.88)',
    primary: '#00695c',
    secondary: '#d84315',
    link: '#8c9eff',
    linkActive: '#8c9eff',
    linkFocus: '#8c9eff',
    linkHover: '#8c9eff',
    linkVisited: '#8c9eff',
  },
};
