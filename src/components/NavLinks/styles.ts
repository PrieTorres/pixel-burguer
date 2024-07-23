"use client";

import styled, { DefaultTheme, css } from 'styled-components';
import { Container as SafeImage } from '../SafeImage/styles';

export const Container = styled.nav`
  ${({ theme }: { theme: DefaultTheme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
    height: 100%;
    max-width: 100%;
    align-items: center;

    @media ${theme.media.lteMedium} {
      & ${SafeImage} {
        max-height: 30px;
        width: 30px;
      }
    }

    @media ${theme.media.lteSmall} {
      flex-flow: column wrap;
      flex-direction: column;
      align-items: center;
      align-content: center;

      & div {
        width: 100%;
      }
    }
  `}
`;