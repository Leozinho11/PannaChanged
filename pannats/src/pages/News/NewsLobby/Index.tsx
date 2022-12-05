import { NewsCard } from "../../../components/News Cards/Index";
import { NewsContainer, NewsLobbyMain } from "./Styled";

import Pele from "./images/Pele.svg";

export function NewsLobby(){
    return(
        <NewsContainer>
            <NewsLobbyMain>
                <NewsCard 
                image={Pele} 
                text={"Família de Pelé atualiza estado de saúde do Rei do Futebol"} 
                newsIndex={""}
                />
            </NewsLobbyMain>
        </NewsContainer>
    )
}