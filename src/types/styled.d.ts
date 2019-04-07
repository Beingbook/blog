// import original module declarations
import 'styled-components';

// and extend them!
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
  }
}
