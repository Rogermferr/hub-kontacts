import styled from "styled-components";

export const ModalFormStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 400px;
  overflow-y: auto;

  background: #8e0e00;
  background: -webkit-linear-gradient(to right, #190a05, #8e0e00);
  background: linear-gradient(to right, #190a05, #8e0e00);

  padding: 16px;
  box-shadow: 0 0 20px 0 #8e0e00;
  border-radius: 8px;

  position: fixed;
  z-index: 11;
  color: #fff;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 16px;

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

    button:hover {
      color: #8e0e00;
      border: solid 1px #8e0e00;
      background: #000000;
      background: -webkit-linear-gradient(to right, #1f1c18, #000000);
      background: linear-gradient(to right, #1f1c18, #000000);
    }
  }

  @media (max-width: 729px) {
    width: 80%;
  }
`;

export const ModalDeleteStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 400px;
  height: 200px;
  overflow-y: auto;

  background: #8e0e00;
  background: -webkit-linear-gradient(to right, #190a05, #8e0e00);
  background: linear-gradient(to right, #190a05, #8e0e00);

  padding: 16px;
  box-shadow: 0 0 20px 0 #8e0e00;
  border-radius: 8px;

  position: fixed;
  z-index: 11;
  color: #fff;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }

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

  button:hover {
    color: #8e0e00;
    border: solid 1px #8e0e00;
    background: #000000;
    background: -webkit-linear-gradient(to right, #1f1c18, #000000);
    background: linear-gradient(to right, #1f1c18, #000000);
  }

  @media (max-width: 729px) {
    width: 80%;
  }
`;
