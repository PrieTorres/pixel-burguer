"use client";

import styled, { DefaultTheme, css } from 'styled-components';
import { responsiveFontSize } from '@/Styles/helperStyles';

export const Container = styled.a`
  ${({ theme }: { theme: DefaultTheme }) => css`
    ${responsiveFontSize(theme, "medium")}
    text-decoration: none;
    display: inline-flex;
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    position: relative;
    height: 100%;
    text-align: center;
    align-items: center;
    align-content: center;

    &::after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all .3s ease-in-out;
    }
    &:hover::after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 25%;
      width: 50%;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all .3s ease-in-out;
    }
  `}
`;