import styled, { DefaultTheme, css } from 'styled-components';

type StyledCSS = { theme: DefaultTheme };

const getFontSize = (fontSize: number) => ({ theme }: StyledCSS) => {
  return fontSize * theme.fontSize.conversionRatio + theme.fontSize.unit;
};

const getLetterSpacing = (fontSize: number, tracking: number) => ({
  theme,
}: StyledCSS) => round(tracking / fontSize) + theme.fontSize.unit;

const round = (value: number) => Math.round(value * 1e5) / 1e5;

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
};

interface MakeTypography {
  size: number;
  tracking: number;
  weight: number;
  upperCase?: boolean;
}
const makeTypography = (args: MakeTypography) => {
  const { size, tracking, weight, upperCase = false } = args;
  return css`
    font-family: 'Noto Sans KR', Roboto, 'Malgun Gothic', NanumGothic,
      'Segoe UI', sans-serif;
    font-size: ${getFontSize(size)};
    line-height: ${getFontSize(size)};
    letter-spacing: ${getLetterSpacing(size, tracking)};
    font-weight: ${weight};
    ${upperCase &&
      css`
        text-transform: uppercase;
      `}
  `;
};

const commonTitleCSS = css`
  &:lang(ko) {
    word-break: keep-all;
  }
`;

export const Headline1 = styled.h1`
  ${commonTitleCSS}
  ${makeTypography({ size: 56, tracking: -1.5, weight: fontWeights.light })}
`;

export const Headline2 = styled.h2`
  ${commonTitleCSS}
  ${makeTypography({ size: 48, tracking: -0.5, weight: fontWeights.light })}
`;

export const Headline3 = styled.h3`
  ${commonTitleCSS}
  ${makeTypography({ size: 40, tracking: 0, weight: fontWeights.regular })}
`;

export const Headline4 = styled.h4`
  ${commonTitleCSS}
  ${makeTypography({ size: 34, tracking: 0.25, weight: fontWeights.regular })}
`;

export const Headline5 = styled.h5`
  ${commonTitleCSS}
  ${makeTypography({ size: 24, tracking: 0, weight: fontWeights.regular })}
`;

export const Headline6 = styled.h6`
  ${commonTitleCSS}
  ${makeTypography({ size: 20, tracking: 0.15, weight: fontWeights.medium })}
`;

export const SubTitle1 = styled.div`
  ${commonTitleCSS}
  ${makeTypography({ size: 16, tracking: 0.15, weight: fontWeights.regular })}
`;

export const SubTitle2 = styled.div`
  ${commonTitleCSS}
  ${makeTypography({ size: 14, tracking: 0.1, weight: fontWeights.medium })}
`;

export const Body1 = styled.div`
  ${makeTypography({ size: 16, tracking: -0.5, weight: fontWeights.regular })}
`;

export const Body2 = styled.div`
  ${makeTypography({ size: 14, tracking: 0.5, weight: fontWeights.regular })}
`;

export const ButtonText = styled.div`
  ${makeTypography({
    size: 14,
    tracking: 1.25,
    weight: fontWeights.medium,
    upperCase: true,
  })}
`;

export const Caption = styled.div`
  ${makeTypography({ size: 12, tracking: 0.4, weight: fontWeights.regular })}
`;

export const Overline = styled.div`
  ${makeTypography({
    size: 10,
    tracking: 1.5,
    weight: fontWeights.regular,
    upperCase: true,
  })}
`;
