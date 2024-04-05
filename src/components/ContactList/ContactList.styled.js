import styled from "styled-components";

export const ContactListElement = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
