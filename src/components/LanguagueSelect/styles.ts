"use client";

import styled, { DefaultTheme, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    width: ${theme.width.languageSelector};
    background: ${theme.colors.midBrown};
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid ${theme.colors.golden};
  `}
`;