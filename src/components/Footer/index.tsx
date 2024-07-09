import { ReactElement } from 'react';
import { Container } from './styles';
import { TranslatedSpan } from '../TranslatedSpan';

export const Footer = (): ReactElement => {

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", gap: 4 }}>
        <TranslatedSpan>contact_me</TranslatedSpan>
        <div>
          <div style={{ display: "flex" }}><TranslatedSpan>email</TranslatedSpan>: priscilatorresbdepaula@gmail.com</div>
          <div style={{ display: "flex" }}><TranslatedSpan>cellphone</TranslatedSpan>: +55 (47) 99227-1283</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <div>&copy; </div>
        <TranslatedSpan>all_rights_reserved</TranslatedSpan>
        <div> Priscila Torres 2024</div>
      </div>
    </Container>
  )
};