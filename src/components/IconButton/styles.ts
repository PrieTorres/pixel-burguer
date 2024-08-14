"use client";

import styled, { DefaultTheme, css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }: { theme: DefaultTheme }) => css`
      outline: none;
      border: none;
      border-radius: 8px;
      transition: all .5s ease;

      &:hover {
        background: ${theme.colors.secondaryBg};
      }
  `}
`;