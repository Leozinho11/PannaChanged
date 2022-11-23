import styled, { css } from "styled-components";

export const LoginContainerStyled = styled.div`
  height: 100vh:
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: right;
`;

export const LoginImage = styled.div``;

export const TextContainerStyled = styled.div`
  margin-bottom: 20px;
`;

export const HelloStyled = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 2px;
`;

export const UserInformationStyled = styled.h4`
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-align: left;

  strong {
    font-weight: 600;
  }
`;

export const FooterContainerStyled = styled.div`
  margin-top: 100px;
  text-align: center;

  button {
    margin-top: 20px;
    width: 100%;
    background-color: transparent;
    border: 1px solid #00aa9c;
    color: #00aa9c;
    font-weight: 700;
  }
`;

export const TraceStyled = styled.hr`
  border: 1px solid #d9d9d9;
  position: relative;
  top: 50px;
  width: 100%;
`;

export const FooterTextStyled = styled.h6`
  color: #00aa9c;
  font-size: 15px;
  font-weight: 600;
`;

export const LoadingStyled = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
export const ErrorMessageStyled = styled.span`
  text-align: center;
  color: red;
  margin-top: 20px;
`;

export const ContainerLogoPortStyled = styled.div`
  display: flex;
  position: relative;
  top: 30px;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;
  font-size: 11px;
  color: #000;

  svg {
    position: relative;
    left: 4%;
    top: -6px;
  }
`;
