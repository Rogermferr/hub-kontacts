import styled from "styled-components";

export const CardContactsStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  border: solid 1px #fff;
  border-radius: 8px;

  padding: 16px;

  button {
    color: #fff;
    background-color: transparent;
    border: solid 1px #fff;
    border-radius: 8px;
    width: 150px;

    transition: all 0.5s;
  }

  button:hover {
    background-color: #8e0e00;
  }
`;
