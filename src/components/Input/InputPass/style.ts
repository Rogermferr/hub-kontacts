import styled from "styled-components";

export const InputPassStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;

  label {
    color: #fff;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 8px;
    width: 85%;
    background-color: transparent;
    border: solid 1px #fff;
    border-radius: 8px;

    input {
      width: 80%;
      color: #fff;
      border: none;

      background-color: transparent;
    }
    input::placeholder {
      color: #fff;
    }

    button {
      width: 10%;
      padding: 0;

      border: transparent 1px solid;
      color: #fff;
      font-size: 18px;
    }

    button:hover {
      background: transparent;
      color: #fff;
    }
  }

  span {
    text-align: center;
    width: 90%;
    font-size: 0.8rem;
  }
`;
