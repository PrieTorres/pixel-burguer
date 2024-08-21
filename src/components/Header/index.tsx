import { ReactElement } from 'react';
import { Container } from './styles';
import { Menu } from '../Menu';
import { SignButtons } from '../SingButtons';
import { LanguageSelect } from '../LanguagueSelect';

export const Header = (): ReactElement => {
  // TODO: Pixel burguer vai ser uma logo
  return (
    <Container>
      {/*<div className="menu-contents">*/}
        <h1>pixel burguer</h1>
        <Menu />
      {/*</div>*/}
      <LanguageSelect />
      <SignButtons />
    </Container>
  )
};