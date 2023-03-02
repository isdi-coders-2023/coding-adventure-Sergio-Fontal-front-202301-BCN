import styled from "styled-components";

const EventFormStyled = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 700;
    margin-bottom: 9px;
  }

  span {
    color: ${(props) => props.theme.colors.terciary};
    font-size: 15px;
    margin-bottom: 20px;
    opacity: 0;
  }

  span:last-child {
    align-self: center;
  }

  [class*="field"] {
    background-color: #fff;
    height: 40px;
    padding: 11px;

    :focus {
      outline-color: ${(props) => props.theme.colors.main};
    }
  }

  [class*="warning"] {
    margin-top: 7px;
  }

  [class*="--alert"] {
    opacity: 1;
  }

  input {
    border-radius: 8px;
  }

  input:last-of-type {
    margin-bottom: 74px;
  }

  @media (min-width: 987px) {
    span {
      margin-bottom: 36px;
    }

    .event-form__submit-warning {
      margin-top: 25px;
    }

    [class*="field"] {
      height: 56px;
    }

    input:last-of-type {
      margin-bottom: 65px;
    }
  }
`;

export default EventFormStyled;
