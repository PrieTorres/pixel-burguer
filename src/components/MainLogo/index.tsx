import { ReactElement } from 'react';
import { Container } from './styles';
import { SafeImage } from '../SafeImage';
import logo from "@/assets/images/pixel_assets/burgers/pixel-buger-icon.png";

export const MainLogo = (): ReactElement => {
  // TODO: Pixel burguer vai ser uma logo
  return (
    <Container>
     <title><h1>Pixel Burger</h1></title>
     <SafeImage src={logo} text='logo pixel art burger'/>
    </Container>
  );
};