import { NavContainer, StyledNavLink,NavLinksContainer,UserMenuContainer } from "./Navigations.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavContainer>
    <NavLinksContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Phone book</StyledNavLink>}
    </NavLinksContainer>
    <UserMenuContainer>
      {isLoggedIn && <UserMenu />}
    </UserMenuContainer>
  </NavContainer>
  );
}
