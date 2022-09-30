import { HomeContainer, MainContainer, MainPhotoContainer, MainTextContainer, } from "./styles";
import MainPhoto from './images/MainPhoto.svg'
import { FirstButton } from "../../components/First Button/Index";

export function Home(){
    return(
        <HomeContainer>
            <MainContainer>
             <MainTextContainer>
                    <h1>Bem vindo ao Panna, </h1>
                    <h3>o melhor site futebolistico que você poderia encontrar. </h3>
                    <FirstButton />
                </MainTextContainer>

                <MainPhotoContainer>
                    <img src={MainPhoto} alt="" />
                </MainPhotoContainer>
            </MainContainer>

            
        </HomeContainer>
    )
}