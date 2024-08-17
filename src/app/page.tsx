import { Carrousell } from "@/components/Carrousell";
import { LanguageSelect } from "@/components/LanguagueSelect";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div>
      <Carrousell itens={["teste1", "teste2", "teste3"]} />
      <Section>testeaaaaa
        <LanguageSelect/>
      </Section>
    </div>
  );
}
