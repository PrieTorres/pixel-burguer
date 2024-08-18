"use client";
import styled, { DefaultTheme, css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, height }: { theme: DefaultTheme; height?: number; }) => css`
    position: absolute;
    background: inherit;
    box-sizing: border-box;
    width: -webkit-fill-available;

    & button,
    & > div,
    & ul {
      //width: 100%;
      background: inherit;
      text-align: left;
    }
    
    & ul {
      padding: ${theme.spacings.small}
    }
    & > button, & > div > ul li, & > div > ul li *  {
      height: ${height ? `${height}px` : theme.height.dropDownDefaultHeight};
      box-sizing: border-box;
      //width: 100%;
      background: inherit;
      text-align: left;
     
    }

    & > div > ul li {
      cursor: pointer;
    }
  `}
`;