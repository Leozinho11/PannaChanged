import { ButtonContainer } from "./styles";

interface ButtonName{
    name: string
}

export function Button({name}: ButtonName){
    return(
        <ButtonContainer>
            <button>{name}</button>
        </ButtonContainer>
    )
}