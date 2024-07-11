"use client";
import { useLanguageContext } from "../Contexts/LanguagueContext";
import { Container } from "./styles"


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