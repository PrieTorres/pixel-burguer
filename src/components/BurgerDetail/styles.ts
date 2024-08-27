'use client'
import { responsiveFontSize } from '@/Styles/helperStyles';
import styled, { DefaultTheme, css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }: { theme: DefaultTheme }) => css`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     gap: 8px;

     & > h2 {
      ${responsiveFontSize(theme, "large")}
     }
     
  `}
`;