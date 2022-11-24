import { MatchesComponent } from "../../components/MatchesComponent/Index";
import { MatchesContainer } from "./Styles";

import FIFAWC from "../../assets/Competitions/FIFAWC2022.svg";

import Brazil from "../../assets/Teams/FifaWC/Brazil.svg";
import Cameroon from "../../assets/Teams/FifaWC/Cameroon.svg";
import Ghana from "../../assets/Teams/FifaWC/Ghana.svg";
import Portugal from "../../assets/Teams/FifaWC/Portugal.svg";
import Serbia from "../../assets/Teams/FifaWC/Serbia.svg";
import SouthKorea from "../../assets/Teams/FifaWC/SouthKorea.svg";
import Switzerland from "../../assets/Teams/FifaWC/Switzerland.svg";
import Uruguay from "../../assets/Teams/FifaWC/Uruguay.svg";



export function Matches(){


    return(
        <MatchesContainer>
            <MatchesComponent
            competitonImg={FIFAWC} 
            date={"24/11/2022"} 
            hour={7} 
            field={"Al Janoub Stadium"} 
            homeTeamImg={Switzerland} 
            homeTeamName={"Suíça"} 
            homeTeamScore={1} 
            awayTeamImg={Cameroon} 
            awayTeamName={"Camarões"} 
            awayTeamScore={0} 
            />

            <MatchesComponent
            competitonImg={FIFAWC} 
            date={"24/11/2022"} 
            hour={10} 
            field={"Education City Stadium"} 
            homeTeamImg={Uruguay} 
            homeTeamName={"Uruguai"} 
            homeTeamScore={0} 
            awayTeamImg={SouthKorea} 
            awayTeamName={"Coréia do Sul"} 
            awayTeamScore={0} 
            />

            <MatchesComponent
            competitonImg={FIFAWC} 
            date={"24/11/2022"} 
            hour={13} 
            field={"974 Stadium"} 
            homeTeamImg={Portugal} 
            homeTeamName={"Portugal"} 
            homeTeamScore={0} 
            awayTeamImg={Ghana} 
            awayTeamName={"Gana"} 
            awayTeamScore={0} 
            />

            <MatchesComponent
            competitonImg={FIFAWC} 
            date={"24/11/2022"} 
            hour={16} 
            field={"Lusail Stadium"} 
            homeTeamImg={Brazil} 
            homeTeamName={"Brasil"} 
            homeTeamScore={0} 
            awayTeamImg={Serbia} 
            awayTeamName={"Sérvia"} 
            awayTeamScore={0} 
            />
        </MatchesContainer>
    )
}