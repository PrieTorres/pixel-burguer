import { ReactElement } from 'react';
import { Container } from './styles';
import { Menu } from '../Menu';
import { SignButtons } from '../SingButtons';
import { LanguageSelect } from '../LanguagueSelect';

export const Header = (): ReactElement => {
  // TODO: Pixel burguer vai ser uma logo
  return (
    <Container>
      <h1>pixel burguer</h1>
      <Menu />
      <LanguageSelect />
      <SignButtons />
    </Container>
  );
};