import { ReactElement } from 'react';
import * as Styled from './styles';
import { TranslatedSpan } from '../TranslatedSpan';

export interface MenuLinkProps {
  children: ReactElement | string,
  link: string,
  newTab?: boolean | undefined
}

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {

  const target = newTab ? "_blank" : "_self";
  return (
    <Styled.Container href={link} target={target}>
      {typeof children == "string" ?
        <TranslatedSpan>{children}</TranslatedSpan>
        : children
      }
    </Styled.Container>
  )
}