import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  padding: 0 20px 0 20px;
  border-radius: 3px;
  box-shadow: -7px 7px 5px hsl(0, 0%, 25%);
  display: flex;
  justify-content: center;
`;

export const Outcome = styled.p`
  font-size: 20px;
`;
