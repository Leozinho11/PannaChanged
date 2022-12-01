import { ConferenceLeagueRow } from "../../../../components/TableComponent/Rows/ConferenceLeague/Index";
import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { NoChangesZoneRow } from "../../../../components/TableComponent/Rows/NoChangesRow/Index";
import { RelegatedRow } from "../../../../components/TableComponent/Rows/RelegatedRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { SerieAContainer } from "./Styled";

import Atalanta from "../../../../assets/Teams/SerieA/Atalanta.svg";
import Bologna from "../../../../assets/Teams/SerieA/Bologna.svg";
import Cremonese from "../../../../assets/Teams/SerieA/Cremonese.svg";
import Empoli from "../../../../assets/Teams/SerieA/Empoli.svg";
import Fiorentina from "../../../../assets/Teams/SerieA/Fiorentina.svg";
import Internazionale from "../../../../assets/Teams/SerieA/Internazionale.svg";
import Juventus from "../../../../assets/Teams/SerieA/Juventus.svg";
import Lazio from "../../../../assets/Teams/SerieA/Lazio.svg";
import Lecce from "../../../../assets/Teams/SerieA/Lecce.svg";
import Milan from "../../../../assets/Teams/SerieA/Milan.svg";
import Monza from "../../../../assets/Teams/SerieA/Monza.svg";
import Napoli from "../../../../assets/Teams/SerieA/Napoli.svg";
import Roma from "../../../../assets/Teams/SerieA/Roma.svg";
import Salernitana from "../../../../assets/Teams/SerieA/Salernitana.svg";
import Sampdoria from "../../../../assets/Teams/SerieA/Sampdoria.svg";
import Sassuolo from "../../../../assets/Teams/SerieA/Sassuolo.svg";
import Spezia from "../../../../assets/Teams/SerieA/Spezia.svg";
import Torino from "../../../../assets/Teams/SerieA/Torino.svg";
import Udinese from "../../../../assets/Teams/SerieA/Udinese.svg";
import Verona from "../../../../assets/Teams/SerieA/Verona.svg";

export function SerieATablePage(){
    return(
        <SerieAContainer>
            <table>
                <TableAtributes />
                <tbody>
            <ContinentalClassification 
                position={"1"} 
                image={Napoli} 
                teamName={"Napoli"} 
                points={"41"} 
                wins={"13"} 
                defeats={"0"} 
                draws={"2"} 
                goalsScored={"25"}/>

                <ContinentalClassification 
                position={"2"} 
                image={Milan} 
                teamName={"Milan"} 
                points={"33"} 
                wins={"10"} 
                defeats={"2"} 
                draws={"3"} 
                goalsScored={"14"}/>

                <ContinentalClassification 
                position={"3"} 
                image={Juventus} 
                teamName={"Juventus"} 
                points={"31"} 
                wins={"9"} 
                defeats={"2"} 
                draws={"4"} 
                goalsScored={"17"}/>

                <ContinentalClassification 
                position={"4"} 
                image={Lazio} 
                teamName={"Lazio"} 
                points={"30"} 
                wins={"9"} 
                defeats={"3"} 
                draws={"3"} 
                goalsScored={"15"}/>

                <SubContinentalClassificationRow 
                position={"5"} 
                image={Internazionale} 
                teamName={"Internazionale"} 
                points={"30"} 
                wins={"10"} 
                defeats={"5"} 
                draws={"0"} 
                goalsScored={"12"}/>

                <ConferenceLeagueRow 
                position={"6"} 
                image={Atalanta} 
                teamName={"Atalanta"} 
                points={"27"} 
                wins={"8"} 
                defeats={"4"} 
                draws={"3"} 
                goalsScored={"7"}/>

                <NoChangesZoneRow 
                position={"7"} 
                image={Roma} 
                teamName={"Roma"} 
                points={"27"} 
                wins={"8"} 
                defeats={"4"} 
                draws={"3"} 
                goalsScored={"4"}/>

                <NoChangesZoneRow 
                position={"8"} 
                image={Udinese} 
                teamName={"Udinese"} 
                points={"24"} 
                wins={"6"} 
                defeats={"3"} 
                draws={"6"} 
                goalsScored={"7"}/>

                <NoChangesZoneRow 
                position={"9"} 
                image={Torino} 
                teamName={"Torino"} 
                points={"24"} 
                wins={"6"} 
                defeats={"6"} 
                draws={"3"} 
                goalsScored={"-1"}/>

                <NoChangesZoneRow 
                position={"10"} 
                image={Fiorentina} 
                teamName={"Fiorentina"} 
                points={"19"} 
                wins={"5"} 
                defeats={"6"} 
                draws={"4"} 
                goalsScored={"-2"}/>

                <NoChangesZoneRow 
                position={"11"} 
                image={Bologna} 
                teamName={"Bologna"} 
                points={"19"} 
                wins={"5"} 
                defeats={"6"} 
                draws={"4"} 
                goalsScored={"-5"}/>

                <NoChangesZoneRow 
                position={"12"} 
                image={Salernitana} 
                teamName={"Salernitana"} 
                points={"17"} 
                wins={"4"} 
                defeats={"6"} 
                draws={"5"} 
                goalsScored={"-5"}/>

                <NoChangesZoneRow 
                position={"13"} 
                image={Empoli} 
                teamName={"Empoli"} 
                points={"17"} 
                wins={"4"} 
                defeats={"6"} 
                draws={"5"} 
                goalsScored={"-7"}/>

                <NoChangesZoneRow 
                position={"14"} 
                image={Monza} 
                teamName={"Monza"} 
                points={"16"} 
                wins={"5"} 
                defeats={"9"} 
                draws={"1"} 
                goalsScored={"-6"}/>

                <NoChangesZoneRow 
                position={"15"} 
                image={Sassuolo} 
                teamName={"Sassuolo"} 
                points={"16"} 
                wins={"4"} 
                defeats={"7"} 
                draws={"4"} 
                goalsScored={"-7"}/>

                <NoChangesZoneRow 
                position={"16"} 
                image={Lecce} 
                teamName={"Lecce"} 
                points={"15"} 
                wins={"3"} 
                defeats={"6"} 
                draws={"6"} 
                goalsScored={"-3"}/>

                <NoChangesZoneRow 
                position={"17"} 
                image={Spezia} 
                teamName={"Spezia"} 
                points={"13"} 
                wins={"3"} 
                defeats={"8"} 
                draws={"4"} 
                goalsScored={"-12"}/>

                <RelegatedRow 
                position={"18"} 
                image={Cremonese} 
                teamName={"Cremonese"} 
                points={"7"} 
                wins={"0"} 
                defeats={"8"} 
                draws={"7"} 
                goalsScored={"-15"}/>

                <RelegatedRow 
                position={"19"} 
                image={Sampdoria} 
                teamName={"Sampdoria"} 
                points={"6"} 
                wins={"1"} 
                defeats={"11"} 
                draws={"3"} 
                goalsScored={"-21"}/>

                <RelegatedRow 
                position={"20"} 
                image={Verona} 
                teamName={"Verona"} 
                points={"5"} 
                wins={"1"} 
                defeats={"12"} 
                draws={"2"} 
                goalsScored={"-17"}/>
                </tbody>
                </table>
        </SerieAContainer>
    )
}