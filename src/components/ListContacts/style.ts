import styled from "styled-components";

export const ListContactsStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  color: #fff;
  width: 100%;

  @media (max-width: 729px) {
    display: flex;

    width: 100%;
    overflow-x: auto;
  }
`;
