import { HomeContainer, MainCardsContainer, MainContainer, MainPhotoContainer, MainTextContainer, } from "./styles";
import MainPhoto from './images/MainPhoto.svg'
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
                    text="Algo"
                    changeTo="/"
                    buttonName="Clique aqui"
                    />

                    <Card 
                    text="Algo"
                    changeTo="/"
                    buttonName="Clique aqui"
                    />

                    <Card 
                    text="Algo"
                    changeTo="/"
                    buttonName="Clique aqui"
                    />

                    <Card 
                    text="Algo"
                    changeTo="/"
                    buttonName="Clique aqui"
                    />
                </MainCardsContainer>
            </MainContainer>

                <MainPhotoContainer>
                    <img src={MainPhoto} alt="" />
                </MainPhotoContainer>
        </HomeContainer>
    )
}