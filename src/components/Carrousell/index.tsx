"use client";
import { ReactElement, ReactNode, useState } from 'react';
import { Container } from './styles';
import { CarrousellSelector } from '../CarrousellSelector';

export const Carrousell = ({ itens }: { itens: ReactNode[] }): ReactElement => {
  const [index, setIndex] = useState(0);
  const max = itens.length;

  return (
    <Container>
      <div>
        {itens[index]}
      </div>
      <CarrousellSelector 
        indexCarrousell={index}
        setIndex={setIndex}
        itensLength={max}
      />
    </Container>
  )
};