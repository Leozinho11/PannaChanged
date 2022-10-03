import { NavLink } from "react-router-dom";
import { Button } from "../Button/Index";
import { CardsContainer } from "./Styles";

interface CardsProps{
    image?: string,
    text: string,
    changeTo: string,
    buttonName: string
}

export function Card({image, text, changeTo, buttonName}: CardsProps){
    return(
        <CardsContainer>
            <img src={image} alt="" />
            <h3>{text}</h3>
            <NavLink to={changeTo}>
                <Button name={buttonName}/>
            </NavLink>
        </CardsContainer>
    )
}