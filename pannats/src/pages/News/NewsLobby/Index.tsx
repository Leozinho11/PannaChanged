import { NewsCard } from "../../../components/News Cards/Index";
import { NewsContainer, NewsLobbyMain } from "./Styled";

import Pele from "./images/Pele.svg";
import Cruzeiro from "./images/CruzeiroBandeira.svg";
import Endrick from "./images/EndrickTransferencia.svg";
import CristianoRonaldoCopa from './images/CristianoRonaldoNoticia.svg';

export function NewsLobby(){
    return(
        <NewsContainer>
            <NewsLobbyMain>
                <NewsCard 
                image={CristianoRonaldoCopa} 
                text={"Reserva de Portugal, Cristiano Ronaldo fala sobre negociações com time saudita."} 
                newsIndex={"/cristiano-ronaldo-fala-sobre-futuro"}                
                />

                <NewsCard 
                image={Endrick} 
                text={"Real Madrid avança nas negociações, e fica muito perto de contratar Endrick do Palmeiras."} 
                newsIndex={"/real-madrid-avanca-por-endrick"}                
                />

                <NewsCard 
                image={Cruzeiro} 
                text={"Gerente de futebol do Cruzeiro anuncia demissão."} 
                newsIndex={"/gerente-de-futebol-do-cruzeiro-anuncia-demissao"}                
                />

                <NewsCard 
                image={Pele} 
                text={"Família de Pelé atualiza estado de saúde do Rei do Futebol"} 
                newsIndex={"/familia-atualiza-estado-de-saude-de-pele"}
                />
            </NewsLobbyMain>
        </NewsContainer>
    )
}