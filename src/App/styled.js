import styled from "styled-components";

export const AppBody = styled.div`
  flex-basis: 600px;
  margin: 20px;
  padding: 5px 40px;
  border-radius: 10px;
  box-shadow: -14.4px 14.4px 44.3px rgba(0, 0, 0, 0.297),
    -25.8px 25.8px 54.9px rgba(0, 0, 0, 0.364),
    -40.9px 40.9px 63.9px rgba(0, 0, 0, 0.402),
    -59.4px 59.4px 72.5px rgba(0, 0, 0, 0.425),
    -81px 81px 81px rgba(0, 0, 0, 0.44);
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.cream},
    ${({ theme }) => theme.dolly},
    ${({ theme }) => theme.cream},
    ${({ theme }) => theme.dolly},
    ${({ theme }) => theme.cream}
  );
  background-size: 200% 100%;
  max-width: 580px;
  min-height: 400px;
  animation: wave 5s linear infinite;

  @keyframes wave {
    from {
      background-position: 0 0;
    }

    to {
      background-position: 300% 0;
    }
  }
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  font-size: 40px;
`;
