import { MenuLinkProps } from "../MenuLink";
import { NavLinks } from "../NavLinks";
import { Container } from "./Styles";
import { SafeImage } from "../SafeImage";

export const Menu = () => {
  const menuTabs: MenuLinkProps[] = [
    {//safe image
      children: "cart",
      link: "/cart",
      buttonType: "button_4"
    },
    {
      children: "home",
      link: "/",
      buttonType: "button_4"
    },
    {
      children: "menu",
      link: "/menu",
      buttonType: "button_4"
    },
    {
      children: "orders",
      link: "/orders",
      buttonType: "button_4"
    },
  ];

  return (
    <Container>
      <NavLinks links={menuTabs} />
    </Container>
  )
}
