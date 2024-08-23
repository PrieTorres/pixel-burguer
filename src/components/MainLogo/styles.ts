"use client";
import styled, { DefaultTheme, css } from "styled-components";
import { responsiveFontSize } from "../../Styles/helperStyles";

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
      color: ${theme.colors.mainColor};
      ${responsiveFontSize(theme, "huge")}
      max-width: 400px;
      display: flex;
      gap: 5px;
      align-items: center;

      & > h1 {
        max-width: calc(100% - 70px);
        width: fit-content;
        display: inline-block;
        max-height: 100%;
        font-size: 0.7em;
        line-height: calc(50% + 5px);
        color: inherit;
        -webkit-text-stroke: 1px ${theme.colors.darkBrown};
      }

      & > div {
        width: 70px;
      }
  `}
`;