"use client";
import { TFunction, i18n } from "i18next";
import React, {
  ReactNode,
  createContext,
  useContext,
  ChangeEvent
} from "react";
import { useTranslation } from "react-i18next";

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

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const languages: Languages = {
    en: { nativeName: "English" },
    pt: { nativeName: "Português" },
  };

  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages }}
    >{children}
    </LanguageContext.Provider>
  )
};

export const useLanguageContext = () => useContext(LanguageContext) as LanguageContextProps;