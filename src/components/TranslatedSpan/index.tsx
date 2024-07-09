"use client";
import { Container } from "./styles"
import { useLanguageContext } from "../../context/LanguagueContext";


export const TranslatedSpan = ({
  children
}: { children: string }) => {
  const { t } = useLanguageContext();
  return (
    <Container>
      {t(children) ?? children}
    </Container>
  )
}