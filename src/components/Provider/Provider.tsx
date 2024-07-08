"use client";
import { ReactElement, ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

export const Provider = ({ children, session }: { children: ReactNode, session?: any }): ReactElement => {

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
};