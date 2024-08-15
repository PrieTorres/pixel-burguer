import { MenuLinkProps } from "../MenuLink";
import { NavLinks } from "../NavLinks";
import { Container } from "./Styles";
import { SafeImage } from "../SafeImage";

export const Menu = () => {
  const menuTabs: MenuLinkProps[] = [
    {//safe image
      children: "cart",
      link: "/cart",
    },
    {
      children: "home",
      link: "/",
    },
    {
      children: "menu",
      link: "/menu",
    },
    {
      children: "orders",
      link: "/orders",
    },
  ];

  return (
    <Container>
      <NavLinks links={menuTabs} />
    </Container>
  )
}
