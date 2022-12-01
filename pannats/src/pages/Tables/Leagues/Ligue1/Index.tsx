import { ConferenceLeagueRow } from "../../../../components/TableComponent/Rows/ConferenceLeague/Index";
import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { NoChangesZoneRow } from "../../../../components/TableComponent/Rows/NoChangesRow/Index";
import { RelegatedRow } from "../../../../components/TableComponent/Rows/RelegatedRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { Ligue1Container } from "./Styled";

import Ajaccio from "../../../../assets/Teams/Ligue1/Ajaccio.svg";
import Angers from "../../../../assets/Teams/Ligue1/Angers.svg";
import Auxerre from "../../../../assets/Teams/Ligue1/Auxerre.svg";
import Bretois from "../../../../assets/Teams/Ligue1/Bretois.svg";
import Clermont from "../../../../assets/Teams/Ligue1/Clermont.svg";
import Lens from "../../../../assets/Teams/Ligue1/Lens.svg";
import Lille from "../../../../assets/Teams/Ligue1/Lille.svg";
import Lorient from "../../../../assets/Teams/Ligue1/Lorient.svg";
import Lyon from "../../../../assets/Teams/Ligue1/Lyon.svg";
import Marseille from "../../../../assets/Teams/Ligue1/Marseille.svg";
import Monaco from "../../../../assets/Teams/Ligue1/Monaco.svg";
import Montpellier from "../../../../assets/Teams/Ligue1/Montpellier.svg";
import Nantes from "../../../../assets/Teams/Ligue1/Nantes.svg";
import Nice from "../../../../assets/Teams/Ligue1/Nice.svg";
import PSG from "../../../../assets/Teams/Ligue1/PSG.svg";
import Reims from "../../../../assets/Teams/Ligue1/Reims.svg";
import Rennais from "../../../../assets/Teams/Ligue1/Rennais.svg";
import Strasbourg from "../../../../assets/Teams/Ligue1/Strasbourg.svg";
import Toulouse from "../../../../assets/Teams/Ligue1/Toulouse.svg";
import Troyes from "../../../../assets/Teams/Ligue1/Troyes.svg";
import { ContinentalPlayoffClassificationRow } from "../../../../components/TableComponent/Rows/ContinentalPlayoffsClassificationRow/Index";

export function Ligue1TablePage(){
    return(
        <Ligue1Container>
            <table>
                <TableAtributes />
                <tbody>
            <ContinentalClassification 
                position={"1"} 
                image={PSG} 
                teamName={"PSG"} 
                points={"41"} 
                wins={"13"} 
                defeats={"0"} 
                draws={"2"} 
                goalsScored={"34"}/>

                <ContinentalClassification 
                position={"2"} 
                image={Lens} 
                teamName={"Lens"} 
                points={"36"} 
                wins={"11"} 
                defeats={"1"} 
                draws={"3"} 
                goalsScored={"16"}/>

                <ContinentalPlayoffClassificationRow 
                position={"3"} 
                image={Rennais} 
                teamName={"Rennais"} 
                points={"31"} 
                wins={"9"} 
                defeats={"2"} 
                draws={"4"} 
                goalsScored={"17"}/>

                <SubContinentalClassificationRow 
                position={"4"} 
                image={Marseille} 
                teamName={"Marseille"} 
                points={"30"} 
                wins={"9"} 
                defeats={"3"} 
                draws={"3"} 
                goalsScored={"13"}/>

                <ConferenceLeagueRow 
                position={"5"} 
                image={Lorient} 
                teamName={"Lorient"} 
                points={"28"} 
                wins={"8"} 
                defeats={"3"} 
                draws={"4"} 
                goalsScored={"5"}/>

                <NoChangesZoneRow 
                position={"6"} 
                image={Monaco} 
                teamName={"Monaco"} 
                points={"27"} 
                wins={"8"} 
                defeats={"4"} 
                draws={"3"} 
                goalsScored={"8"}/>

                <NoChangesZoneRow 
                position={"7"} 
                image={Lille} 
                teamName={"Lille"} 
                points={"26"} 
                wins={"8"} 
                defeats={"5"} 
                draws={"2"} 
                goalsScored={"4"}/>

                <NoChangesZoneRow 
                position={"8"} 
                image={Lyon} 
                teamName={"Lyon"} 
                points={"21"} 
                wins={"6"} 
                defeats={"6"} 
                draws={"3"} 
                goalsScored={"5"}/>

                <NoChangesZoneRow 
                position={"9"} 
                image={Nice} 
                teamName={"Nice"} 
                points={"20"} 
                wins={"5"} 
                defeats={"5"} 
                draws={"5"} 
                goalsScored={"-2"}/>

                <NoChangesZoneRow 
                position={"10"} 
                image={Clermont} 
                teamName={"Clermont"} 
                points={"19"} 
                wins={"5"} 
                defeats={"6"} 
                draws={"4"} 
                goalsScored={"-4"}/>

                <NoChangesZoneRow 
                position={"11"} 
                image={Reims} 
                teamName={"Reims"} 
                points={"17"} 
                wins={"3"} 
                defeats={"4"} 
                draws={"8"} 
                goalsScored={"-5"}/>

                <NoChangesZoneRow 
                position={"12"} 
                image={Toulouse} 
                teamName={"Toulouse"} 
                points={"16"} 
                wins={"4"} 
                defeats={"7"} 
                draws={"4"} 
                goalsScored={"-7"}/>

                <NoChangesZoneRow 
                position={"13"} 
                image={Troyes} 
                teamName={"Troyes"} 
                points={"14"} 
                wins={"3"} 
                defeats={"7"} 
                draws={"5"} 
                goalsScored={"-5"}/>

                <NoChangesZoneRow 
                position={"14"} 
                image={Montpellier} 
                teamName={"Montpellier"} 
                points={"14"} 
                wins={"4"} 
                defeats={"9"} 
                draws={"2"} 
                goalsScored={"-5"}/>

                <NoChangesZoneRow 
                position={"15"} 
                image={Nantes} 
                teamName={"Nantes"} 
                points={"13"} 
                wins={"2"} 
                defeats={"6"} 
                draws={"7"} 
                goalsScored={"-7"}/>

                <NoChangesZoneRow 
                position={"16"} 
                image={Bretois} 
                teamName={"Bretois"} 
                points={"13"} 
                wins={"3"} 
                defeats={"8"} 
                draws={"4"} 
                goalsScored={"-12"}/>

                <RelegatedRow 
                position={"17"} 
                image={Auxerre} 
                teamName={"Auxerre"} 
                points={"13"} 
                wins={"3"} 
                defeats={"8"} 
                draws={"4"} 
                goalsScored={"-17"}/>

                <RelegatedRow 
                position={"18"} 
                image={Ajaccio} 
                teamName={"Ajaccio"} 
                points={"12"} 
                wins={"3"} 
                defeats={"9"} 
                draws={"3"} 
                goalsScored={"-10"}/>

                <RelegatedRow 
                position={"19"} 
                image={Strasbourg} 
                teamName={"Strasbourg"} 
                points={"11"} 
                wins={"1"} 
                defeats={"6"} 
                draws={"8"} 
                goalsScored={"-9"}/>

                <RelegatedRow 
                position={"20"} 
                image={Angers} 
                teamName={"Angers"} 
                points={"8"} 
                wins={"2"} 
                defeats={"11"} 
                draws={"2"} 
                goalsScored={"-19"}/>
                </tbody>
                </table>
        </Ligue1Container>
    )
}