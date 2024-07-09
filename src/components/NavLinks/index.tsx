import { MenuLink } from '../MenuLink';
import { MenuLinkProps } from "../MenuLink/index";
import { Container } from './styles';


export const NavLinks = ({ links = [] }: {
  links: MenuLinkProps[]
}) => {

  return (
    <Container data-testid={"NavLinks"}>
      {links.map((link, i) => (
        <MenuLink
          key={i}
          {...link}
        />
      ))}
    </Container>
  )
}
