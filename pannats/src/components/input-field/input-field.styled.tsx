import styled, { css } from 'styled-components'

export const WrapperStyled = styled.div``

type InputTextProps = {
  iconPosition: 'left' | 'right'
  disabled: boolean
  hasError: boolean
}

export const InputWrapperStyled = styled.div<InputTextProps>`
  ${({ theme, iconPosition, disabled = false, hasError }) => css`
    display: flex;
    flex-direction: ${iconPosition === 'right' ? 'row-reverse' : 'row'};
    border: 1px solid;
    border-radius: 3px;
    border-color: ${hasError ? '#00aa9c' : '#D9D9D9'};
    background-color: ${disabled ? '#D9D9D9' : '#171717'};

    &:focus-within {
      box-shadow: 0 0 0 2px #c4c4c434;
    }

    ${hasError &&
    css`
      svg {
        color: '#00aa9c';
      }
    `}
  `}
`

export const InputStyled = styled.input<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    color: #000;
    font-family: Montserrat;
    font-size: 13px;
    background-color: #171717;
    border: 0;
    outline: none;
    width: 100%;
    padding: 10px;

    box-shadow: 0 0 0 22px
      ${disabled ? '#E6E6E6' : '#fff'} inset;
  `}
`

export const LabelStyled = styled.label<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    font-size: 13px;
    background-color: #171717 ;
    color: ${hasError ? '#00aa9c' : '#000'};
    cursor: pointer;
  `}
`

export const IconStyled = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: #000;

    & svg {
      width: 100%;
    }
  `}
`

export const MessageErrorStyled = styled.div`
  ${({ theme }) => css`
    color: #00aa9c;
    font-size: 0.5rem;
    padding-left: 2px;
  `}
`
