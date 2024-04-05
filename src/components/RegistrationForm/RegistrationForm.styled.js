import { Form, Field } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 80px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #fafafa;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #686868;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  width: 100px;
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
  margin-top: 20px;

  border-radius: 5px;
  text-align: center;

  &:hover {
    background: #686868;
    color: #fafafa;
  }
`;
