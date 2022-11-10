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
            <img src={image} alt="" />
            <NavLink to={newsIndex}>
                <p>{text}</p>
            </NavLink>
        </NewsCardContainer>
    )
}