import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { MenuContainer, WelcomeMessage, LogoutButton } from "./UserMenu.styled";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <MenuContainer>
      <WelcomeMessage>Welcome, {user.name} !</WelcomeMessage>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </MenuContainer>
  );
}
