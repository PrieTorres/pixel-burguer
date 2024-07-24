"use client";
import i18n, { i18n as i18ntype, TFunction } from "i18next";
import React, { ReactNode, createContext, useContext, ChangeEvent, useEffect, useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

interface Languages {
  [key: string]: {
    nativeName: string;
  };
}

export interface LanguageContextProps {
  t: TFunction;
  i18n: i18ntype;
  onClickLanguageChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  languages: Languages;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageContextProvider = ({ children }: { children: ReactNode; }) => {
  const languages: Languages = {
    en: { nativeName: "English" },
    pt: { nativeName: "Português" },
  };

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          fallbackLng: 'en',
          debug: true,
          interpolation: {
            escapeValue: false,
          }
        }).then(() => {
          document.documentElement.lang = i18n.language;
        });
    } else {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  const { t } = useTranslation();

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    document.documentElement.lang = i18n.language;
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext) as LanguageContextProps;