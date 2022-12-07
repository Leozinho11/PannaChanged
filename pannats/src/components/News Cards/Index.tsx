import { NavLink } from "react-router-dom";
import { NewsCardContainer } from "./styled";

interface NewsCardProps{
    image: string
    text: string
    newsIndex: string
}

export function NewsCard({image, text, newsIndex}:NewsCardProps){
    return(
        <NewsCardContainer>
            <NavLink to={newsIndex}>
            <img src={image} alt="" />
                <h3>{text}</h3>
            </NavLink>
        </NewsCardContainer>
    )
}