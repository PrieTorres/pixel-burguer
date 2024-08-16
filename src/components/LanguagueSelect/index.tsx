"use client";
import { ReactElement } from "react";
import { Container } from "./styles";
import brasilFlag from "../../assets/images/flags/brasil.png";
import euaFlag from "../../assets/images/flags/eua.png";
import { useLanguageContext } from "../Contexts/LanguageContext";
import { DropDown } from "../DropDown";
import { SafeImage } from "../SafeImage";
import { transformArrayToObject } from "@/lib/helper";

export const LanguageSelect = (): ReactElement => {
  const { changeLanguage, i18n } = useLanguageContext();
  const selectLanguage = [
    {
      id: "en",
      children: <SafeImage text={"english"} src={euaFlag} />,
      onClick: () => changeLanguage("en")
    },
    {
      id: "pt",
      children: <SafeImage text={"portuguese"} src={brasilFlag} />,
      onClick: () => changeLanguage("pt")
    },
  ];

  const transposedLangOpt = transformArrayToObject(selectLanguage, "id");

  return (
    <Container>
      <DropDown
        items={selectLanguage}
        dropDownId="language-selector"
        toggleId="toggle-language-selector"
      >
        {transposedLangOpt[i18n.language as ("pt" | "en")].children}
      </DropDown>
    </Container>
  );
};