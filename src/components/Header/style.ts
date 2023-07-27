import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 80px;

  box-shadow: 0 0 0 2px #8e0e00;

  position: fixed;
  top: 0;
  left: 0;

  background: #000000;
  background: -webkit-linear-gradient(to right, #1f1c18, #000000);
  background: linear-gradient(to right, #1f1c18, #000000);

  img {
    width: 300px;
    margin-left: 150px;
  }
`;
