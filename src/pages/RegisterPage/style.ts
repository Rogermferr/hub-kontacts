import styled from "styled-components";

export const RegisterPageStyle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 50px;

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
