import { ButtonContainer, PannaButton } from "./styles";

interface ButtonName{
    name: string
}

export function Button({name}: ButtonName){
    return(
        <ButtonContainer>
            <PannaButton>{name}</PannaButton>
        </ButtonContainer>
    )
}