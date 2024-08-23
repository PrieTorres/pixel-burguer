import { ReactElement } from 'react';
import { Container } from './styles';
import { Menu } from '../Menu';
import { SignButtons } from '../SingButtons';
import { LanguageSelect } from '../LanguagueSelect';
import { MainLogo } from '../MainLogo';

export const Header = (): ReactElement => {
  // TODO: Pixel burguer vai ser uma logo
  return (
    <Container>
      <MainLogo/>
      <Menu />
      <LanguageSelect />
      <SignButtons />
    </Container>
  );
};