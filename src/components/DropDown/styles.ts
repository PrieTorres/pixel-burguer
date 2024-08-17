"use client";
import styled, { DefaultTheme, css } from 'styled-components';
    
export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    position: relative;
    max-height: 100%;
  
    & > button {
      max-height: 100%;
    }
    
  `}
`;