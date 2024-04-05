import { StyledAuthNav, AuthNavBox } from "./AuthNav.styled";

export default function AuthNav() {
  return (
    <AuthNavBox>
      <StyledAuthNav to="/register">Register</StyledAuthNav>
      <StyledAuthNav to="/login">Log In</StyledAuthNav>
    </AuthNavBox>
  );
}
