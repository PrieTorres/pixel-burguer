"use client";
import styled, { DefaultTheme, css } from 'styled-components';
    
export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    & > li {
      max-height: 100%;
    }
    
  `}
`;