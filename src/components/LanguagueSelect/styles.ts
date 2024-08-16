"use client";

"use client"
import styled, { DefaultTheme, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    padding: 8px;
    width: 150px;
    height: 30px;
  `}
`;