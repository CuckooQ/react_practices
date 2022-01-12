import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleBlock = styled.span`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 30px;
  border: 0.1rem solid #0b0b0b;
  border-radius: 1rem;
  outline: none;
  margin: 10px;
`;

export const ToggleObject = styled.span`
  position: absolute;
  ${(props) =>
    props.toggle === false
      ? "transform: translateX(0);"
      : "transform: translateX(72px);"}
  top: 0;
  bottom: 0;
  margin: auto 0;
  border-radius: 50%;
  background-color: #e9897e;
  width: 25px;
  height: 25px;
  display: inline-block;
  transition: 1000ms;
`;

export const Button = styled.button`
  background-color: #e9897e;
  color: #f0f0f0;
  border: none;
  border-radius: 0.8rem;
  padding: 0.7rem;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const ContentBlock = styled.span`
  font-size: 1.4rem;
  margin: 10px;
`;
