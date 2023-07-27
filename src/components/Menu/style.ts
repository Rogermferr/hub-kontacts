import styled from "styled-components";

export const MenuStyle = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 16px;

  width: 100%;
  margin-top: 100px;

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
