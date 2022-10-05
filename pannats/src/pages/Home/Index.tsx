import { HomeContainer, MainCardsContainer, MainContainer, MainPhotoContainer, MainTextContainer, } from "./styles";
import MainPhoto from './images/Main/MainPhoto.svg'
import TransferCardPhoto from './images/Cards/transferphoto.jpeg';
import MatchesCardPhoto from './images/Cards/classics.jpg';
import LeaguesCardPhoto from './images/Cards/competitions.png';
import FieldsCardPhoto from './images/Cards/Field.jpeg';
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
                    text="Quer saber das principais noticias do mundo do futebol?"
                    changeTo="/"
                    buttonName="Ver noticias"
                    />

                    <Card
                    image={MatchesCardPhoto} 
                    text="Quer saber como estão as pricipais partidas do mundo?"
                    changeTo="/"
                    buttonName="Ver partidas"
                    />

                    <Card
                    image={LeaguesCardPhoto} 
                    text="Quer saber qual a posição do seu time na tabela?"
                    changeTo="/"
                    buttonName="Ver tabelas"
                    />

                    <Card
                    image={FieldsCardPhoto} 
                    text="Quer saber qual quadra está disponível para o seu fut?"
                    changeTo="/"
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