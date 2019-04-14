import 'styled-components';

declare module 'styled-components' {
  import { BaseThemedCssFunction } from 'styled-components';

  export interface DefaultTheme {
    maxContentWidth: number;
    breakpoints: {
      phone: number;
      tablet: number;
      desktop: number;
    };
    fontSize: {
      conversionRatio: number;
      unit: string;
    };
    easing: {
      standard: string;
      decelerate: string;
      accelerate: string;
    };
    spacing: {
      container: number;
      component: number;
    };
    color: {
      background: string;
      text: string;
      link: string;
      linkHover: string;
      linkActive: string;
      linkFocus: string;
      linkVisited: string;
      primary: string;
      secondary: string;
    };
  }
}
