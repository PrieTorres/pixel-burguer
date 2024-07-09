"use client";
import { ReactElement, ReactNode, useState } from 'react';
import { Container } from './styles';

export const Carrousell = ({ itens }: { itens: ReactNode[] }): ReactElement => {
  const [index, setIndex] = useState(0);
  const max = itens.length;
  const mappingItens = (max: number, component: ReactNode) => {
    const arr = new Array();
    arr.fill(null, 0, max);
   
    return arr.map((item, i) => <div key={i}>{component}</div>);
  }

  return (
    <Container>
      <div>
        {itens[index]}
      </div>
      <div> // carroussel selector
        <div>{"-->"}</div>
        <div>{mappingItens(max, <div className='dot'></div>)}</div>
        <div>{"<--"}</div>
      </div>
    </Container>
  )
};