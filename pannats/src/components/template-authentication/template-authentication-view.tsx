import React from 'react'
import {
  ContentStyled,
  LoginContainerStyled,
  LogoContainerStyled
} from './template-authentication-styled'
import Logo from '../../assets/logoCopa.svg'

type TemplateAuthenticationProps = {
  children: React.ReactNode
}

const TemplateAuthenticationView: React.FC<TemplateAuthenticationProps> = ({
  children
}) => {
  return (
    <LoginContainerStyled>
      <LogoContainerStyled>
        <Logo />
      </LogoContainerStyled>
      <ContentStyled>{children}</ContentStyled>
    </LoginContainerStyled>
  )
}

export default TemplateAuthenticationView
