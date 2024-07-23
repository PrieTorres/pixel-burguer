"use client";

import styled, { DefaultTheme, css } from "styled-components";
import { responsiveFontSize } from "@/Styles/helperStyles";

export const Container = styled.select`
  ${({ theme }: { theme: DefaultTheme }) => css`
    padding: 8px;

    ${responsiveFontSize(theme, "medium")}
  `}
`;