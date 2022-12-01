import { ConferenceLeagueRow } from "../../../../components/TableComponent/Rows/ConferenceLeague/Index";
import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { NoChangesZoneRow } from "../../../../components/TableComponent/Rows/NoChangesRow/Index";
import { RelegatedRow } from "../../../../components/TableComponent/Rows/RelegatedRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { PremierLeagueContainer } from "./Styled";

import Arsenal from "../../../../assets/Teams/PremierLeague/Arsenal.svg";
import AstonVilla from "../../../../assets/Teams/PremierLeague/AstonVilla.svg";
import Bournemouth from "../../../../assets/Teams/PremierLeague/Bournemouth.svg";
import Brentford from "../../../../assets/Teams/PremierLeague/Brentford.svg";
import Brighton from "../../../../assets/Teams/PremierLeague/Brighton.svg";
import Chelsea from "../../../../assets/Teams/PremierLeague/Chelsea.svg";
import CrystalPalace from "../../../../assets/Teams/PremierLeague/CrystalPalace.svg";
import Everton from "../../../../assets/Teams/PremierLeague/Everton.svg";
import Fulham from "../../../../assets/Teams/PremierLeague/Fulham.svg";
import Leeds from "../../../../assets/Teams/PremierLeague/Leeds.svg";
import Leicester from "../../../../assets/Teams/PremierLeague/Leicester.svg";
import Liverpool from "../../../../assets/Teams/PremierLeague/Liverpool.svg";
import ManchesterCity from "../../../../assets/Teams/PremierLeague/ManchesterCity.svg";
import ManchesterUnited from "../../../../assets/Teams/PremierLeague/ManchesterUnited.svg";
import Newcastle from "../../../../assets/Teams/PremierLeague/Newcastle.svg";
import NottinghamForest from "../../../../assets/Teams/PremierLeague/NottinghamForest.svg";
import Southampton from "../../../../assets/Teams/PremierLeague/Southampton.svg";
import Tottenham from "../../../../assets/Teams/PremierLeague/Tottenham.svg";
import WestHam from "../../../../assets/Teams/PremierLeague/WestHam.svg";
import Wolves from "../../../../assets/Teams/PremierLeague/Wolves.svg";






export function PremierLeagueTablePage(){
    return(
        <PremierLeagueContainer>
            <table>
                <TableAtributes />
                <tbody>
            <ContinentalClassification 
                position={"1"} 
                image={Arsenal} 
                teamName={"Arsenal"} 
                points={"37"} 
                wins={"12"} 
                defeats={"1"} 
                draws={"1"} 
                goalsScored={"22"}/>

                <ContinentalClassification 
                position={"2"} 
                image={ManchesterCity} 
                teamName={"Manchester City"} 
                points={"32"} 
                wins={"10"} 
                defeats={"2"} 
                draws={"2"} 
                goalsScored={"26"}/>

                <ContinentalClassification 
                position={"3"} 
                image={Newcastle} 
                teamName={"Newcastle"} 
                points={"30"} 
                wins={"8"} 
                defeats={"1"} 
                draws={"6"} 
                goalsScored={"18"}/>

                <ContinentalClassification 
                position={"4"} 
                image={Tottenham} 
                teamName={"Tottenham"} 
                points={"29"} 
                wins={"9"} 
                defeats={"4"} 
                draws={"2"} 
                goalsScored={"10"}/>

                <SubContinentalClassificationRow 
                position={"5"} 
                image={ManchesterUnited} 
                teamName={"Manchester United"} 
                points={"26"} 
                wins={"8"} 
                defeats={"4"} 
                draws={"2"} 
                goalsScored={"0"}/>

                <NoChangesZoneRow
                position={"6"} 
                image={Liverpool} 
                teamName={"Liverpool"} 
                points={"22"} 
                wins={"6"} 
                defeats={"4"} 
                draws={"4"} 
                goalsScored={"11"}/>

                <NoChangesZoneRow 
                position={"7"} 
                image={Brighton} 
                teamName={"Brighton"} 
                points={"21"} 
                wins={"6"} 
                defeats={"5"} 
                draws={"3"} 
                goalsScored={"4"}/>

                <NoChangesZoneRow 
                position={"8"} 
                image={Chelsea} 
                teamName={"Chelsea"} 
                points={"21"} 
                wins={"6"} 
                defeats={"5"} 
                draws={"3"} 
                goalsScored={"0"}/>

                <NoChangesZoneRow 
                position={"9"} 
                image={Fulham} 
                teamName={"Fulham"} 
                points={"19"} 
                wins={"5"} 
                defeats={"6"} 
                draws={"4"} 
                goalsScored={"-2"}/>

                <NoChangesZoneRow 
                position={"10"} 
                image={Brentford} 
                teamName={"Brentford"} 
                points={"19"} 
                wins={"4"} 
                defeats={"4"} 
                draws={"7"} 
                goalsScored={"-2"}/>

                <NoChangesZoneRow 
                position={"11"} 
                image={CrystalPalace} 
                teamName={"Crystal Palace"} 
                points={"19"} 
                wins={"5"} 
                defeats={"5"} 
                draws={"4"} 
                goalsScored={"-3"}/>

                <NoChangesZoneRow 
                position={"12"} 
                image={AstonVilla} 
                teamName={"Aston Villa"} 
                points={"18"} 
                wins={"5"} 
                defeats={"7"} 
                draws={"3"} 
                goalsScored={"-6"}/>

                <NoChangesZoneRow 
                position={"13"} 
                image={Leicester} 
                teamName={"Leicester City"} 
                points={"17"} 
                wins={"5"} 
                defeats={"8"} 
                draws={"2"} 
                goalsScored={"0"}/>

                <NoChangesZoneRow 
                position={"14"} 
                image={Bournemouth} 
                teamName={"Bournemouth"} 
                points={"16"} 
                wins={"4"} 
                defeats={"7"} 
                draws={"4"} 
                goalsScored={"-14"}/>

                <NoChangesZoneRow 
                position={"15"} 
                image={Leeds} 
                teamName={"Leeds"} 
                points={"15"} 
                wins={"4"} 
                defeats={"7"} 
                draws={"3"} 
                goalsScored={"-4"}/>

                <NoChangesZoneRow 
                position={"16"} 
                image={WestHam} 
                teamName={"West Ham"} 
                points={"14"} 
                wins={"4"} 
                defeats={"9"} 
                draws={"2"} 
                goalsScored={"-5"}/>

                <NoChangesZoneRow 
                position={"17"} 
                image={Everton} 
                teamName={"Everton"} 
                points={"14"} 
                wins={"3"} 
                defeats={"7"} 
                draws={"5"} 
                goalsScored={"-6"}/>

                <RelegatedRow 
                position={"18"} 
                image={NottinghamForest} 
                teamName={"Nottingham Forest"} 
                points={"13"} 
                wins={"3"} 
                defeats={"8"} 
                draws={"4"} 
                goalsScored={"-19"}/>

                <RelegatedRow 
                position={"19"} 
                image={Southampton} 
                teamName={"Southampton"} 
                points={"12"} 
                wins={"3"} 
                defeats={"9"} 
                draws={"3"} 
                goalsScored={"-14"}/>

                <RelegatedRow 
                position={"20"} 
                image={Wolves} 
                teamName={"Wolves"} 
                points={"10"} 
                wins={"2"} 
                defeats={"9"} 
                draws={"4"} 
                goalsScored={"-16"}/>
                </tbody>
                </table>
        </PremierLeagueContainer>
    )
}