import { ReactElement } from 'react';
import { Container } from './styles';
import { Menu } from '../Menu';
import { LanguagueSelect } from '../LanguagueSelect';
import { SignButtons } from '../SingButtons';

export const Header = (): ReactElement => {
  // TODO: Pixel burguer vai ser uma logo
  return(
    <Container>
      <h1>pixel burguer</h1>
      <Menu/>
      <LanguagueSelect/>
      <SignButtons/>
    </Container>
  )
};