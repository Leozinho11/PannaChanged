import styled, { css } from "styled-components";

export const LoginContainerStyled = styled.div`
  display: flex;
  height: 100vh;
`;

export const LogoContainerStyled = styled.div`
  display: flex;
  flex: 0 0 49%;
  justify-content: center;
  align-items: center;
  max-width: 49%;
  background-color: #171717;
`;

export const LogoBranco = styled.svg``;

export const ContentStyled = styled.div`
  ${({ theme }) => css`
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 51%;
    flex: 0 0 51%;
    background-color: #262626;
  `}
`;
