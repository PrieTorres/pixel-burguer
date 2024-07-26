"use client";

import styled, { css, DefaultTheme } from "styled-components";

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    display: flex;
    gap: 12px;
    max-height: 100%;

    @media ${theme.media.lteSmall} {
      flex-flow: column;
      width: 100%;
    }
  `}
`;