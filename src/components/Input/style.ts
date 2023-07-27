import styled from "styled-components";

export const InputStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;

  label {
    color: #fff;
  }

  input {
    width: 85%;
    padding: 8px;

    background-color: transparent;
    border: solid 1px #fff;
    border-radius: 8px;
    color: #fff;
  }
  input::placeholder {
    color: #fff;
  }

  span {
    text-align: center;
    width: 90%;
    font-size: 0.8rem;
  }
`;
