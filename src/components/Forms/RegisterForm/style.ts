import styled from "styled-components";

export const RegisterFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: 350px;
  height: 100%;

  background: #8e0e00;
  background: -webkit-linear-gradient(to right, #190a05, #8e0e00);
  background: linear-gradient(to right, #190a05, #8e0e00);

  padding: 16px;
  box-shadow: 0 0 20px 0 #8e0e00;
  border-radius: 8px;

  button {
    width: 90%;
    padding: 8px 0;

    border: solid 1px #fff;
    border-radius: 8px;
    background-color: transparent;

    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 1rem;

    transition: all 1s;
  }

  button:hover,
  a:hover {
    color: #8e0e00;
    border: solid 1px #8e0e00;
    background: #000000;
    background: -webkit-linear-gradient(to right, #1f1c18, #000000);
    background: linear-gradient(to right, #1f1c18, #000000);
  }

  span {
    color: #fff;
  }

  a {
    text-align: center;
    color: #fff;

    border: solid 1px #fff;
    border-radius: 8px;
    width: 90%;
    padding: 8px 0;

    transition: all 1s;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`;
