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
  line-height: 1;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  .load_0 {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .load_1 {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.black};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .load_2 {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  

  .icon {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;
