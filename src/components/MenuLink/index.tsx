import { ReactElement } from 'react';
import * as Styled from './styles';
import { TranslatedSpan } from '../TranslatedSpan';
import ActiveLink from '../ActiveLink';

export interface MenuLinkProps {
  children: ReactElement | string,
  link: string,
  newTab?: boolean,
  buttonType?: "button_1" | "button_2" | "button_3" | "button_4"
}

export const MenuLink = ({ children, link, newTab = false, buttonType }: MenuLinkProps) => {

  const target = newTab ? "_blank" : "_self";
  return (
    <Styled.Container  className={`${buttonType}`}>
      <ActiveLink href={link} target={target}>
        {typeof children == "string" ?
          <TranslatedSpan>{children}</TranslatedSpan>
          : children
        }
      </ActiveLink>
    </Styled.Container>
  )
}