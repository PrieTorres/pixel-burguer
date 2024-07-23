"use client";
import { TFunction, i18n } from "i18next";
import React, {
  ReactNode,
  createContext,
  useContext,
  ChangeEvent,
  useEffect
} from "react";
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
  i18n: i18n;
  onClickLanguageChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  languages: Languages;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageContextProvider = ({ children }: { children: ReactNode; }) => {
  const languages: Languages = {
    en: { nativeName: "English" },
    pt: { nativeName: "Português" },
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof i18n.use == "function") {
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
        });
    }
  }, []);

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages }}
    >
      <html lang={i18n.language}>
        {children}
      </html>
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext) as LanguageContextProps;