import { DefaultTheme, RuleSet, css } from "styled-components";

export type DeviceSizes = "medium" | "small" | "large";
export type Sizes = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "huge" | "xhuge";
export const animationDeclaration = ["@-moz-keyframes", "@-webkit-keyframes", "@-o-keyframes", ""];

export const getFontSize = (theme: DefaultTheme, size: Sizes, device: DeviceSizes) => css`
  font-size: ${theme.font.size[`${device}_device_${size}`]};
`;

export const getDotSize = (theme: DefaultTheme, size: Sizes, device: DeviceSizes) => css`
  width: ${theme.dotSize[`${device}`]};
  height: ${theme.dotSize[`${device}`]};
`;

export const responsiveFontSize = (theme: DefaultTheme, size: Sizes) => css`
  ${getFontSize(theme, size, "large") ?? ""}

  @media ${theme.media.lteMedium} {
    ${getFontSize(theme, size, "medium") ?? ""}
  }
  @media ${theme.media.lteSmall} {
    ${getFontSize(theme, size, "small") ?? ""}
  }
`;

export const responsiveDotSize = (theme: DefaultTheme, size: Sizes) => css`
  ${getDotSize(theme, size, "large") ?? ""}

  @media ${theme.media.lteMedium} {
    ${getDotSize(theme, size, "medium") ?? ""}
  }
  @media ${theme.media.lteSmall} {
    ${getDotSize(theme, size, "small") ?? ""}
  }
`;

export const createAnimation = (animationName: string, animation: RuleSet<object> | string) => css`
  @-moz-keyframes ${animationName} {
    ${animation}
  }

  @-webkit-keyframes ${animationName} {
    ${animation}
  }

  @-o-keyframes ${animationName} {
    ${animation}
  }

  @keyframes ${animationName} {
    ${animation}
  }
`;