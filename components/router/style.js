import styled from "styled-components";

export const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #e9897e;
`;

export const Li = styled.li`
  cursor: pointer;
  list-style: none;
  transition: transform 100ms;

  ::before {
    content: "❯";
    padding-right: 0.5rem;
  }

  :hover {
    transform: scale(1.4);
  }
`;
