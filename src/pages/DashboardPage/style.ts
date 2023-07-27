import styled from "styled-components";

export const DashboardPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  main {
    display: flex;
    flex-direction: column;
    gap: 64px;

    margin: 0 150px;

    color: #fff;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  @media (max-width: 769px) {
    main {
      margin: 0 16px;
      text-align: center;

      h1 {
        line-height: 150%;
        text-align: center;
      }
    }
  }
`;
