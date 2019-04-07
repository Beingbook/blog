import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  maxContentWidth: 960,
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

export default theme;
