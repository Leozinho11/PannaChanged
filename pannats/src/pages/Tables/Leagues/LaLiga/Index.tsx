import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { ConferenceLeagueRow } from "../../../../components/TableComponent/Rows/ConferenceLeague/Index";
import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { NoChangesZoneRow } from "../../../../components/TableComponent/Rows/NoChangesRow/Index";
import { RelegatedRow } from "../../../../components/TableComponent/Rows/RelegatedRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { LaLigaContainer } from "./Styled";

import Almeria from "../../../../assets/Teams/LaLiga/Almeria.svg";
import AthleticBilbao from "../../../../assets/Teams/LaLiga/AthleticBilbao.svg";
import AtleticoMadrid from "../../../../assets/Teams/LaLiga/AtleticoMadrid.svg";
import Barcelona from "../../../../assets/Teams/LaLiga/Barcelona.svg";
import Betis from "../../../../assets/Teams/LaLiga/Betis.svg";
import Cadiz from "../../../../assets/Teams/LaLiga/Cadiz.svg";
import CeltaDeVigo from "../../../../assets/Teams/LaLiga/CeltaDeVigo.svg";
import Elche from "../../../../assets/Teams/LaLiga/Elche.svg";
import Espanyol from "../../../../assets/Teams/LaLiga/Espanyol.svg";
import Getafe from "../../../../assets/Teams/LaLiga/Getafe.svg";
import Girona from "../../../../assets/Teams/LaLiga/Girona.svg";
import Mallorca from "../../../../assets/Teams/LaLiga/Mallorca.svg";
import Osasuna from "../../../../assets/Teams/LaLiga/Osasuna.svg";
import RayoVallecano from "../../../../assets/Teams/LaLiga/RayoVallecano.svg";
import RealMadrid from "../../../../assets/Teams/LaLiga/RealMadrid.svg";
import RealSociedad from "../../../../assets/Teams/LaLiga/RealSociedad.svg";
import Sevilla from "../../../../assets/Teams/LaLiga/Sevilla.svg";
import Valencia from "../../../../assets/Teams/LaLiga/Valencia.svg";
import Valladolid from "../../../../assets/Teams/LaLiga/Valladolid.svg";
import Villarreal from "../../../../assets/Teams/LaLiga/Villarreal.svg";


export function LaLigaTablePage(){
    return(
        <LaLigaContainer>
                <table>
                <TableAtributes />
                <tbody>
            <ContinentalClassification 
                position={"1"} 
                image={Barcelona} 
                teamName={"Barcelona"} 
                points={"37"} 
                wins={"12"} 
                defeats={"1"} 
                draws={"1"} 
                goalsScored={"28"}/>

                <ContinentalClassification 
                position={"2"} 
                image={RealMadrid} 
                teamName={"Real Madrid"} 
                points={"35"} 
                wins={"11"} 
                defeats={"1"} 
                draws={"2"} 
                goalsScored={"19"}/>

                <ContinentalClassification 
                position={"3"} 
                image={RealSociedad} 
                teamName={"Real Sociedad"} 
                points={"26"} 
                wins={"8"} 
                defeats={"4"} 
                draws={"2"} 
                goalsScored={"2"}/>

                <ContinentalClassification 
                position={"4"} 
                image={AthleticBilbao} 
                teamName={"Athletic Bilbao"} 
                points={"24"} 
                wins={"7"} 
                defeats={"4"} 
                draws={"3"} 
                goalsScored={"10"}/>

                <SubContinentalClassificationRow 
                position={"5"} 
                image={AtleticoMadrid} 
                teamName={"Atlético de Madrid"} 
                points={"24"} 
                wins={"7"} 
                defeats={"4"} 
                draws={"3"} 
                goalsScored={"7"}/>

                <ConferenceLeagueRow 
                position={"6"} 
                image={Betis} 
                teamName={"Real Betis"} 
                points={"24"} 
                wins={"7"} 
                defeats={"4"} 
                draws={"3"} 
                goalsScored={"5"}/>

                <NoChangesZoneRow 
                position={"7"} 
                image={Osasuna} 
                teamName={"Osasuna"} 
                points={"23"} 
                wins={"7"} 
                defeats={"5"} 
                draws={"2"} 
                goalsScored={"2"}/>

                <NoChangesZoneRow 
                position={"8"} 
                image={RayoVallecano} 
                teamName={"Rayo Vallecano"} 
                points={"22"} 
                wins={"6"} 
                defeats={"4"} 
                draws={"4"} 
                goalsScored={"4"}/>

                <NoChangesZoneRow 
                position={"9"} 
                image={Villarreal} 
                teamName={"Villarreal"} 
                points={"21"} 
                wins={"6"} 
                defeats={"5"} 
                draws={"3"} 
                goalsScored={"5"}/>

                <NoChangesZoneRow 
                position={"10"} 
                image={Valencia} 
                teamName={"Valencia"} 
                points={"19"} 
                wins={"5"} 
                defeats={"5"} 
                draws={"4"} 
                goalsScored={"7"}/>

                <NoChangesZoneRow 
                position={"11"} 
                image={Mallorca} 
                teamName={"Mallorca"} 
                points={"19"} 
                wins={"5"} 
                defeats={"5"} 
                draws={"4"} 
                goalsScored={"0"}/>

                <NoChangesZoneRow 
                position={"12"} 
                image={Valladolid} 
                teamName={"Real Valladolid"} 
                points={"17"} 
                wins={"5"} 
                defeats={"7"} 
                draws={"2"} 
                goalsScored={"-8"}/>

                <NoChangesZoneRow 
                position={"13"} 
                image={Girona} 
                teamName={"Girona"} 
                points={"16"} 
                wins={"4"} 
                defeats={"6"} 
                draws={"4"} 
                goalsScored={"-2"}/>

                <NoChangesZoneRow 
                position={"14"} 
                image={Almeria} 
                teamName={"Almería"} 
                points={"16"} 
                wins={"5"} 
                defeats={"8"} 
                draws={"1"} 
                goalsScored={"-6"}/>

                <NoChangesZoneRow 
                position={"15"} 
                image={Getafe} 
                teamName={"Getafe"} 
                points={"14"} 
                wins={"3"} 
                defeats={"6"} 
                draws={"5"} 
                goalsScored={"-8"}/>

                <NoChangesZoneRow 
                position={"16"} 
                image={Espanyol} 
                teamName={"Espanyol"} 
                points={"12"} 
                wins={"2"} 
                defeats={"6"} 
                draws={"6"} 
                goalsScored={"-6"}/>

                <NoChangesZoneRow 
                position={"17"} 
                image={CeltaDeVigo} 
                teamName={"Celta de Vigo"} 
                points={"12"} 
                wins={"3"} 
                defeats={"8"} 
                draws={"3"} 
                goalsScored={"-12"}/>

                <RelegatedRow 
                position={"18"} 
                image={Sevilla} 
                teamName={"Sevilla"} 
                points={"11"} 
                wins={"2"} 
                defeats={"7"} 
                draws={"5"} 
                goalsScored={"-9"}/>

                <RelegatedRow 
                position={"19"} 
                image={Cadiz} 
                teamName={"Cádiz"} 
                points={"11"} 
                wins={"2"} 
                defeats={"7"} 
                draws={"5"} 
                goalsScored={"-17"}/>

                <RelegatedRow 
                position={"20"} 
                image={Elche} 
                teamName={"Elche"} 
                points={"4"} 
                wins={"0"} 
                defeats={"10"} 
                draws={"4"} 
                goalsScored={"-21"}/>
                </tbody>
                </table>
        </LaLigaContainer>
    )
}