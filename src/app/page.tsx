import { Carrousell } from "@/components/Carrousell";
import styles from "./page.module.css";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className={styles.main}>
      <Carrousell itens={["teste1", "teste2", "teste3"]} />
      <Section>testeaaaaa</Section>
    </div>
  );
}
