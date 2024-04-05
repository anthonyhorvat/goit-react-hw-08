import { NavContainer, StyledNavLink } from "./Navigations.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavContainer>
      <div>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">Phone book</StyledNavLink>}
      </div>
      <div style={{ justifySelf: "end" }}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </NavContainer>
  );
}
