"use client";

import styled, { DefaultTheme, css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }: { theme: DefaultTheme, height?: number }) => css`
      height: ${theme.height.sectionHeight};
  `}
`;