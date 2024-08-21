"use client";
import styled, { DefaultTheme, css } from "styled-components";
import { responsiveFontSize } from "../../Styles/helperStyles";

export const Container = styled.header`
  ${({ theme }: { theme: DefaultTheme }) => css`
    display: flex;
    justify-content: space-between;
    height: ${theme.height.headerheight};
    min-width: fit-content;
    overflow: hidden;
    color: ${theme.colors.secondaryColor};
    padding: ${theme.spacings.small};
    background: ${theme.colors.black};
    background: ${theme.gradient.darkGreyGradient};

    ${responsiveFontSize(theme, "xlarge")}

    //& .menu-contents {
    //  width: calc(100% - ${theme.width.languageSelector});
    //  display: flex;
    //  justify-content: space-between;
    //}

    @media ${theme.media.lteMedium} {
      height: auto;
      align-items: flex-start;
      ${responsiveFontSize(theme, "xlarge")}
    }
  `}
`;