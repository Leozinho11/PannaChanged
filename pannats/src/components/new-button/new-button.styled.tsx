import styled, { css } from 'styled-components'
import { ButtonProps } from './new-button'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'bgColor'>

const wrapperModifier = {
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 15px;
      margin-right: 5px;
    }
  `
}

export const WrapperStyled = styled.button<WrapperProps>`
  ${({ theme, bgColor = 'blue', hasIcon }) => css`
    width: fit-content;
    background-color: #00aa9c;
    padding: 10px 20px;
    border: none;
    ${bgColor === 'white' && `border: solid 1px #D9D9D9`};
    border-radius: 25px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: ${bgColor === 'white'
      ? 500
      : 600};
    color: ${bgColor === 'white' ? '#000' : '#fff'};
    cursor: pointer;

    ${hasIcon && wrapperModifier.withIcon()}

    :hover {
      opacity: 0.98;
    }
    :active {
      box-shadow: 0 0 0 0.2px rgb(204, 204, 204) inset;
    }
  `}
`
