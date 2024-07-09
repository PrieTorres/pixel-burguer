import { ReactElement } from 'react';
import { Container } from './styles';
import { Menu } from '../Menu';
import { LanguagueSelect } from '../LanguagueSelect';

export const Header = (): ReactElement => {

  return(
    <Container>
      <h1>pixel burguer</h1>
      <Menu/>
      <LanguagueSelect/>
    </Container>
  )
};