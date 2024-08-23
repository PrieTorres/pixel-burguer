import { createGlobalStyle, css } from "styled-components";
import { responsiveFontSize } from "./helperStyles";
//import 'material-icons/iconfont/material-icons.css';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'VT323';
    src: url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    ${({ theme }) => css`
      font-family: "VT323", monospace;
      background: #222;
      background: ${theme.colors.mainBg};
      color: ${theme.colors.secondaryColor}
      font-family: ${({ theme }) => theme.font.family.default};
      ${responsiveFontSize(theme, "medium")}
    `}
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${({ theme }) => theme.font.family.secondary}
  }
`;