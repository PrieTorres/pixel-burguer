import { Carousel } from "@/components/Carousel";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div>
      <Carousel items={["teste1", "teste2", "teste3"]} />
      <Section>testeaaaaa</Section>
    </div>
  );
}
