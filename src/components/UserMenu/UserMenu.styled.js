import styled from "styled-components";

export const MenuContainer = styled.div`
  padding: 10px;
  background-color: #292929;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WelcomeMessage = styled.p`
  font-weight: bold;
  color: #fafafa;
  margin: 0 10px;
`;

export const LogoutButton = styled.button`
  width: 70px;
  height: 30px;
  background: none;
  border: solid 2px #686868;
  color: #fafafa;
  cursor: pointer;
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 11px;
  font-weight: bold;
  outline: none;
  padding: 3px 6px;
  text-transform: uppercase;
  transition: all 0.3s;
  margin-left: 10px;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background: #686868;
    color: #fafafa;
  }
`;
