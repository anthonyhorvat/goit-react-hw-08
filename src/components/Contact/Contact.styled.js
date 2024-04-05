import styled from "styled-components";

export const ContactElement = styled.li`
  font-family: "Helvetica", Arial, sans-serif;
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  background: none;
  border: solid 2px #686868;
  color: #fafafa;
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 4px;
  text-transform: uppercase;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;

  margin-left: 10px;
  display: inline-block;

  &:hover {
    background: #686868;
    color: #fafafa;
  }
`;
