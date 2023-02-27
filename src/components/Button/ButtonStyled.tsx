import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #cccf18;
  border: none;
  border-radius: 10px;
  color: #1e1e1e;
  cursor: pointer;
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  height: 40px;
  line-height: 31px;
  letter-spacing: 0.04em;
  position: absolute;
  width: 323px;

  @media (min-width: 987px) {
    height: 57px;
    width: 320px;
  }
`;

export default ButtonStyled;
