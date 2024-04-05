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

  border-radius: 5px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.05)
    );
    border-radius: 50%;
    transition: all 0.5s;
    z-index: 1;
    pointer-events: none;
  }

  &:hover:before {
    transform: scale(3);
  }

  &:hover {
    background: #686868;
    color: #fafafa;
  }
`;
