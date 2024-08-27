import { ReactElement } from 'react';
import { Container } from './styles';
import { Carousel } from '../Carousel';
import { SafeImage } from '../SafeImage';
import plateImg from "@/assets/images/pixel_assets/plates/plate_1.png";

export interface BurgersCarouselProps {

};

export const BurgersCarousel = ({ }: BurgersCarouselProps): ReactElement => {

  return (
    <Container>
      <Carousel
        items={[]}
        bottomComponent={
          <div>
            <SafeImage
              src={plateImg}
              text='plate'
              height={20}
            />
          </div>
        }
      />
    </Container>
  )
};