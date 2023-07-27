import styled from "styled-components";

export const LoginPageStyle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 25vh;

  img {
    width: 350px;
    height: 50px;
  }

  @media (max-width: 769px) {
    img {
      width: 90%;
    }
  }
`;
