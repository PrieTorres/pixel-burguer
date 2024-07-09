import styled, { DefaultTheme, css } from "styled-components";
import { responsiveFontSize } from "../../Styles/helperStyles";

export const Container = styled.header`
  ${({ theme }: { theme: DefaultTheme }) => css`
    display: flex;
    justify-content: space-between;
    height: ${theme.height.headerheight};
    min-width: fit-content;
    overflow: hidden;
    padding: ${theme.spacings.small};
    background: ${theme.colors.black};
    background: ${theme.gradient.darkGreyGradient};

    ${responsiveFontSize(theme, "large")}

    @media ${theme.media.lteMedium} {
      height: auto;
      align-items: flex-start;
    }
  `}
`;