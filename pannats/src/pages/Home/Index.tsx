import { HomeContainer, MainCardsContainer, MainContainer, MainPhotoContainer, MainTextContainer, } from "./styles";
import MainPhoto from './images/Main/MainPhoto.svg'
import TransferCardPhoto from './images/Cards/transferphoto.svg';
import MatchesCardPhoto from './images/Cards/classics.svg';
import LeaguesCardPhoto from './images/Cards/competitions.svg';
import FieldsCardPhoto from './images/Cards/Field.svg';
import { FirstButton } from "../../components/First Button/Index";
import { Card } from "../../components/Cards/Index";

export function Home(){
    return(
        <HomeContainer>
            <MainContainer>
                <MainTextContainer>
                    <h1>Bem vindo ao Panna, </h1>
                    <h3>o melhor site futebolistico que você poderia encontrar. </h3>
                    <FirstButton />
                </MainTextContainer>

                <MainCardsContainer>
                    <Card
                    image={TransferCardPhoto} 
                    text="Quer ver quais foram as principais transferências atuais?"
                    changeTo="/transferencias"
                    buttonName="Ver transferências"
                    />

                    <Card
                    image={MatchesCardPhoto} 
                    text="Quer saber como estão as pricipais partidas do mundo?"
                    changeTo="/partidas"
                    buttonName="Ver partidas"
                    />

                    <Card
                    image={LeaguesCardPhoto} 
                    text="Quer saber qual a posição do seu time na tabela?"
                    changeTo="/tabelas"
                    buttonName="Ver tabelas"
                    />

                    <Card
                    image={FieldsCardPhoto} 
                    text="Quer saber qual quadra está disponível para o seu fut?"
                    changeTo="/quadras"
                    buttonName="Ver quadras"
                    />
                </MainCardsContainer>
            </MainContainer>

                <MainPhotoContainer>
                    <img src={MainPhoto} alt="" />
                </MainPhotoContainer>
        </HomeContainer>
    )
}