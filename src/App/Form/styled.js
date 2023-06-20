import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.span`
  display: inline-block;
  width: 200px;
  margin-right: 5px;
  font-weight: bold;
  font-size: large;
`;

export const AmountField = styled.input`
  border: 1px solid ${({ theme }) => theme.black};
  padding: 10px;
  width: 250px;
  border-radius: 3px;
  box-shadow: -7px 7px 5px hsl(0, 0%, 25%);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.cream};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.black};
  padding: 10px;
  width: 250px;
  border-radius: 3px;
  box-shadow: -7px 7px 5px hsl(0, 0%, 25%);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.cream};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  padding: 12px;
  border-radius: 3px;
  font-weight: bold;
  font-size: large;
  box-shadow: -7px 7px 5px hsl(0, 0%, 25%);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.cream};
  }

  &:active {
    background-color: ${({ theme }) => theme.dolly};
  }
`;

export const Info = styled.div`
  margin-top: 35px;
  line-height: 1;
  font-style: italic;
`;

export const Loading = styled.div`
  color: ${({ theme }) => theme.black};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.red};
`;
