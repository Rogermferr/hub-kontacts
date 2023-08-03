import styled from "styled-components";

export const BackgroundModalStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #0009;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  section {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
