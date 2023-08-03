import styled from "styled-components";

export const LoadingStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: #000000;
  background: -webkit-linear-gradient(to right, #1f1c18, #000000);
  background: linear-gradient(to right, #1f1c18, #000000);

  .loader {
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: #8e0e00;
    animation: smokeOut 1s ease-in-out infinite alternate;
    text-shadow: 0 0 1px white;
  }
  .loader:before {
    content: "Loading";
  }

  @keyframes smokeOut {
    100% {
      opacity: 0.08;
      filter: blur(5px);
      letter-spacing: 4px;
    }
  }
`;
