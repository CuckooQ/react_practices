import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: #0b0b0b;
  cursor: pointer;
  transition: transform 100ms;

  :hover {
    transform: scale(1.4);
  }
`;
