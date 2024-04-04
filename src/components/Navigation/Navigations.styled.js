import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  background-color: #292929;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fafafa;
  text-decoration: none;
  padding: 5px 10px;
  margin: 0 10px;
  font-size: 16px;
  transition: color 0.3s ease;

  &.active {
    font-weight: bold;
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
