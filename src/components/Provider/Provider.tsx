"use client";
import { ReactElement, ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/Styles/theme";
import { GlobalStyles } from "@/Styles/global-styles";

export const Provider = ({ children, session }: { children: ReactNode, session?: any; }): ReactElement => {

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};