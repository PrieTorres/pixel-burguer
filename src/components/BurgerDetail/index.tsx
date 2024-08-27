import { ReactElement } from 'react';
import { Container } from './styles';
import { StaticImageData } from 'next/image';
import { TranslatedSpan } from '../TranslatedSpan';
import { SafeImage } from '../SafeImage';

export interface BurgerDetailProps {
  title: string;
  srcImage: string | StaticImageData;
  description: string;
};

export const BurgerDetail = ({ title, srcImage, description }: BurgerDetailProps): ReactElement => {

  return (
    <Container>
      <h2><TranslatedSpan>{title}</TranslatedSpan></h2>
      <p>{description}</p>
      <SafeImage src={srcImage} text={title} height={100} />
    </Container>
  )
};