import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  height: 40px;
  line-height: 31px;
  letter-spacing: 0.04em;
  align-self: center;
  width: 323px;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 987px) {
    height: 57px;
    width: 320px;
  }
`;

export default ButtonStyled;
