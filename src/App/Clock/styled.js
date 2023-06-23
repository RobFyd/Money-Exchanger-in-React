import styled from "styled-components";

export const StyledClock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 5px;
  font-style: italic;

  @media (max-width: 400px) {
    .x {
      display: flex;
    justify-content: center;
    }
  }
`;
