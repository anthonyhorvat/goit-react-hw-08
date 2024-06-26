import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAuthNav = styled(NavLink)`
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

export const AuthNavBox = styled.div`
  display: flex;
  align-items: center;
`;
