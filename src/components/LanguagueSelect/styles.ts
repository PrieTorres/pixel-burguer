"use client";

import styled, { DefaultTheme, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    width: ${theme.width.languageSelector};
    background: ${theme.colors.red};
  `}
`;