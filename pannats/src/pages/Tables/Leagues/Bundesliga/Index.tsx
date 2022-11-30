import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { ContinentalPlayoffClassificationRow } from "../../../../components/TableComponent/Rows/ContinentalPlayoffsClassificationRow/Index";
import { NoChangesZoneRow } from "../../../../components/TableComponent/Rows/NoChangesRow/Index";
import { RelegatedRow } from "../../../../components/TableComponent/Rows/RelegatedRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { RelegatedPlayoffs } from "../../../../components/TableComponent/Rows/RelegatedPlayoffs/Index";
import { ConferenceLeagueRow } from "../../../../components/TableComponent/Rows/ConferenceLeague/Index";
import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { BundesligaContainer } from "./Styled";


import Augsburg from "../../../../assets/Teams/Bundesliga/Augsburg.svg";
import Bayern from "../../../../assets/Teams/Bundesliga/Bayern.svg";
import Bochum from "../../../../assets/Teams/Bundesliga/Bochum.svg";
import Dortmund from "../../../../assets/Teams/Bundesliga/BorussiaDortmund.svg";
import Frankfurt from "../../../../assets/Teams/Bundesliga/EintrachtFrankfurt.svg";
import Freiburg from "../../../../assets/Teams/Bundesliga/Freiburg.svg";
import HerthaBerlin from "../../../../assets/Teams/Bundesliga/HerthaBerlin.svg";
import Hoffenheim from "../../../../assets/Teams/Bundesliga/Hoffenheim.svg";
import Köln from "../../../../assets/Teams/Bundesliga/Köln.svg";
import Leverkusen from "../../../../assets/Teams/Bundesliga/Leverkusen.svg";
import Mainz from "../../../../assets/Teams/Bundesliga/Mainz.svg";
import Mönchengladbach from "../../../../assets/Teams/Bundesliga/Mönchengladbach.svg";
import RBLeipzig from "../../../../assets/Teams/Bundesliga/RBLeipzig.svg";
import Schalke04 from "../../../../assets/Teams/Bundesliga/Schalke04.svg";
import Stuttgart from "../../../../assets/Teams/Bundesliga/Stuttgart.svg";
import UnionBerlin from "../../../../assets/Teams/Bundesliga/UnionBerlin.svg";
import WerderBremen from "../../../../assets/Teams/Bundesliga/WerderBremen.svg";
import Wolfsburg from "../../../../assets/Teams/Bundesliga/Wolfsburg.svg";


export function BundesligaTablePage(){
    return(
        <BundesligaContainer>
                <table>
                <TableAtributes />
                <tbody>
                    <ContinentalClassification 
                     position="1"
                     image={Bayern}
                     teamName="Bayern"
                     points="34"
                     wins="10"
                     defeats="1"
                     draws="4"
                     goalsScored="36"
                    />

                    <ContinentalClassification 
                     position="2"
                     image={Freiburg}
                     teamName="Freiburg"
                     points="30"
                     wins="9"
                     defeats="3"
                     draws="3"
                     goalsScored="8"
                    />

                    <ContinentalClassification 
                     position="3"
                     image={RBLeipzig}
                     teamName="RB Leipzig"
                     points="28"
                     wins="8"
                     defeats="3"
                     draws="4"
                     goalsScored="9"
                    />

                    <ContinentalClassification 
                     position="4"
                     image={Frankfurt}
                     teamName="Eintracht Frankfurt"
                     points="27"
                     wins="8"
                     defeats="4"
                     draws="3"
                     goalsScored="8"
                    />

                    <SubContinentalClassificationRow                     
                    position="5"
                    image={UnionBerlin}
                    teamName="Union Berlin"
                    points="27"
                    wins="8"
                    defeats="4"
                    draws="3"
                    goalsScored="4"
                    />

                    <ConferenceLeagueRow                     
                    position="6"
                    image={Dortmund}
                    teamName="Dortmund"
                    points="25"
                    wins="8"
                    defeats="6"
                    draws="1"
                    goalsScored="4"
                    />

                    <NoChangesZoneRow                     
                    position="7"
                    image={Wolfsburg}
                    teamName="Wolfsburg"
                    points="23"
                    wins="6"
                    defeats="4"
                    draws="5"
                    goalsScored="4"
                    />

                    <NoChangesZoneRow                     
                    position="8"
                    image={Mönchengladbach}
                    teamName="Mönchengladbach"
                    points="22"
                    wins="6"
                    defeats="5"
                    draws="4"
                    goalsScored="4"
                    />

                    <NoChangesZoneRow                     
                    position="9"
                    image={WerderBremen}
                    teamName="Werder Bremen"
                    points="21"
                    wins="6"
                    defeats="6"
                    draws="3"
                    goalsScored="-2"
                    />

                    <NoChangesZoneRow 
                    position="10"
                    image={Mainz}
                    teamName="Mainz"
                    points="19"
                    wins="5"
                    defeats="6"
                    draws="4"
                    goalsScored="-5"
                    />

                    <NoChangesZoneRow 
                    position="11"
                    image={Hoffenheim}
                    teamName="Hoffenhein"
                    points="18"
                    wins="5"
                    defeats="7"
                    draws="3"
                    goalsScored="0"
                    />

                    <NoChangesZoneRow 
                    position="12"
                    image={Leverkusen}
                    teamName="Leverkusen"
                    points="18"
                    wins="5"
                    defeats="7"
                    draws="3"
                    goalsScored="-1"
                    />

                    <NoChangesZoneRow 
                    position="13"
                    image={Köln}
                    teamName="Köln"
                    points="17"
                    wins="4"
                    defeats="6"
                    draws="5"
                    goalsScored="-8"
                    />

                    <NoChangesZoneRow 
                    position="14"
                    image={Augsburg}
                    teamName="Augsburg"
                    points="15"
                    wins="4"
                    defeats="8"
                    draws="3"
                    goalsScored="-8"
                    />

                    <NoChangesZoneRow 
                    position="15"
                    image={HerthaBerlin}
                    teamName="Hertha Berlin"
                    points="14"
                    wins="3"
                    defeats="7"
                    draws="5"
                    goalsScored="-3"
                    />

                    <RelegatedPlayoffs 
                    position="16"
                    image={Stuttgart}
                    teamName="Stuttgart"
                    points="14"
                    wins="3"
                    defeats="7"
                    draws="5"
                    goalsScored="-9"
                    />

                    <RelegatedRow 
                    position="17"
                    image={Bochum}
                    teamName="Bochum"
                    points="13"
                    wins="4"
                    defeats="10"
                    draws="1"
                    goalsScored="-22"
                    />

                    <RelegatedRow 
                    position="18"
                    image={Schalke04}
                    teamName="Schalke 04"
                    points="9"
                    wins="2"
                    defeats="10"
                    draws="3"
                    goalsScored="-19"
                    />

                </tbody>
            </table>
        </BundesligaContainer>
    )
}