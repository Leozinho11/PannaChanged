import { CardsContainer } from "./Styles";

interface CardsProps{
    image: string,
    text: string,
}

export function Card({image, text}: CardsProps){
    return(
        <CardsContainer>
            <img src={image} alt="" />
        </CardsContainer>
    )
}