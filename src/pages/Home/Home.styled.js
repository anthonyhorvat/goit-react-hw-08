import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppInfo = styled.div`
  background-color: #131313;
  color: #fafafa;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

export const Button = styled(Link)`
  background: none;
  border: solid 2px #686868;
  color: #fafafa;
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  text-transform: uppercase;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    background: #686868;
    color: #fafafa;
  }
`;

export const AppName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
