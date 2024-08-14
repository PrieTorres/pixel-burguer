"use client";

import { responsiveDotSize } from '@/Styles/helperStyles';
import { ButtonHTMLAttributes } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

export const Container = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  ${({ theme,selected }: { theme: DefaultTheme, selected?:boolean }) => css`
      ${responsiveDotSize(theme, "medium")}
      border-radius: 50%;
      transition: background .5s ease;
      background: ${selected? theme.colors.yellow : ""};
  `}
`;