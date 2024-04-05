import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const InputName = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #fafafa;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
`;

export const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: solid 2px #474544;
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;

  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  &:focus {
    outline: none;
    padding: 0 0 0.875em 0;
    background-color: transparent;
    color: #fafafa;
  }
`;

export const NeonButton = styled.button`
  width: 120px;
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
