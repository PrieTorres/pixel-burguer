"use client";
import { ReactElement, ReactNode, useState } from 'react';
import { Container } from './styles';
import { CarouselSelector } from '../CarouselSelector';

export interface CarouselProps {
  items: ReactNode[];

};

export const Carousel = ({ items }: CarouselProps): ReactElement => {
  const [index, setIndex] = useState(0);
  const max = items.length;

  return (
    <Container>
      <div>
        {items[index]}
      </div>
      <CarouselSelector 
        indexCarousel={index}
        setIndex={setIndex}
        itemsLength={max}
      />
    </Container>
  )
};