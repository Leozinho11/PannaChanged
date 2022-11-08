import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { ContinentalPlayoffClassificationRow } from "../../../../components/TableComponent/Rows/ContinentalPlayoffsClassificationRow/Index";
import { NoChangesZoneRow } from "../../../../components/TableComponent/Rows/NoChangesRow/Index";
import { RelegatedRow } from "../../../../components/TableComponent/Rows/RelegatedRow/Index"
import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { BrasileiraoContainer } from "./Styled";

import AmericaMG from './images/AmericaMG.svg';
import AthleticoPR from './images/AthleticoPR.svg';
import AtleticoGO from './images/AtleticoGO.svg';
import AtleticoMG from './images/AtleticoMG.svg';
import Avai from './images/Avai.svg';
import Botafogo from './images/Botafogo.svg';
import Ceara from './images/Ceara.svg';
import Corinthians from './images/Corinthians.svg';
import Coritiba from './images/Coritiba.svg';
import Cuiaba from './images/Cuiaba.svg';
import Flamengo from './images/Flamengo.svg';
import Fluminense from './images/Fluminense.svg';
import Fortaleza from './images/Fortaleza.svg';
import Goias from './images/Goias.svg';
import Internacional from './images/Internacional.svg';
import Juventude from './images/Juventude.svg';
import Palmeiras from './images/Palmeiras.svg';
import RBBragantino from './images/RBBragantino.svg';
import Santos from './images/Santos.svg';
import SaoPaulo from './images/SaoPaulo.svg';




export function BrasileiraoTablePage() {
    return(
        <BrasileiraoContainer>
            <table>
                <TableAtributes />
                <tbody>
                    <ContinentalClassification 
                     id="1"
                     position="1"
                     image={Palmeiras}
                     teamName="Palmeiras"
                     points="78"
                     wins="22"
                     defeats="2"
                     draws="12"
                     goalsScored="41"
                    />

                    <ContinentalClassification 
                     id="2"
                     position="2"
                     image={Internacional}
                     teamName="Internacional"
                     points="67"
                     wins="18"
                     defeats="5"
                     draws="13"
                     goalsScored="23"
                    />

                    <ContinentalClassification 
                     id="3"
                     position="3"
                     image={Fluminense}
                     teamName="Fluminense"
                     points="64"
                     wins="19"
                     defeats="10"
                     draws="7"
                     goalsScored="18"
                    />

                    <ContinentalClassification 
                     id="4"
                     position="4"
                     image={Corinthians}
                     teamName="Corinthians"
                     points="64"
                     wins="18"
                     defeats="8"
                     draws="10"
                     goalsScored="9"
                    />

                    <ContinentalPlayoffClassificationRow 
                    id="5"
                    position="5"
                    image={Flamengo}
                    teamName="Flamengo"
                    points="61"
                    wins="18"
                    defeats="11"
                    draws="7"
                    goalsScored="22"
                    />

                    <ContinentalPlayoffClassificationRow 
                    id="6"
                    position="6"
                    image={AthleticoPR}
                    teamName="Athletico-PR"
                    points="54"
                    wins="15"
                    defeats="12"
                    draws="9"
                    goalsScored="-3"
                    />

                    <SubContinentalClassificationRow 
                    id="7"
                    position="7"
                    image={AmericaMG}
                    teamName="América-MG"
                    points="52"
                    wins="15"
                    defeats="14"
                    draws="7"
                    goalsScored="1"
                    />

                    <SubContinentalClassificationRow 
                    id="8"
                    position="8"
                    image={AtleticoMG}
                    teamName="Atlético-MG"
                    points="52"
                    wins="13"
                    defeats="10"
                    draws="13"
                    goalsScored="4"
                    />

                    <SubContinentalClassificationRow 
                    id="9"
                    position="9"
                    image={SaoPaulo}
                    teamName="São Paulo"
                    points="51"
                    wins="12"
                    defeats="9"
                    draws="15"
                    goalsScored="10"
                    />

                    <SubContinentalClassificationRow 
                    id="10"
                    position="10"
                    image={Botafogo}
                    teamName="Botafogo"
                    points="50"
                    wins="14"
                    defeats="14"
                    draws="8"
                    goalsScored="-2"
                    />

                    <SubContinentalClassificationRow 
                    id="11"
                    position="11"
                    image={Fortaleza}
                    teamName="Fortaleza"
                    points="49"
                    wins="13"
                    defeats="13"
                    draws="10"
                    goalsScored="-1"
                    />

                    <SubContinentalClassificationRow 
                    id="12"
                    position="12"
                    image={Santos}
                    teamName="Santos"
                    points="47"
                    wins="12"
                    defeats="13"
                    draws="11"
                    goalsScored="8"
                    />

                    <NoChangesZoneRow 
                    id="13"
                    position="13"
                    image={Goias}
                    teamName="Goiás"
                    points="46"
                    wins="11"
                    defeats="12"
                    draws="13"
                    goalsScored="-6"
                    />

                    <NoChangesZoneRow 
                    id="14"
                    position="14"
                    image={RBBragantino}
                    teamName="RB Bragantino"
                    points="44"
                    wins="11"
                    defeats="14"
                    draws="11"
                    goalsScored="-3"
                    />

                    <NoChangesZoneRow 
                    id="15"
                    position="15"
                    image={Coritiba}
                    teamName="Coritiba"
                    points="41"
                    wins="12"
                    defeats="19"
                    draws="5"
                    goalsScored="-20"
                    />

                    <NoChangesZoneRow 
                    id="16"
                    position="16"
                    image={Cuiaba}
                    teamName="Cuiabá"
                    points="38"
                    wins="9"
                    defeats="16"
                    draws="11"
                    goalsScored="-9"
                    />

                    <RelegatedRow 
                    id="17"
                    position="17"
                    image={AtleticoGO}
                    teamName="Atlético-GO"
                    points="34"
                    wins="8"
                    defeats="18"
                    draws="10"
                    goalsScored="-18"
                    />

                    <RelegatedRow 
                    id="18"
                    position="18"
                    image={Ceara}
                    teamName="Ceará"
                    points="34"
                    wins="6"
                    defeats="14"
                    draws="16"
                    goalsScored="-8"
                    />

                    <RelegatedRow 
                    id="19"
                    position="19"
                    image={Avai}
                    teamName="Avaí"
                    points="29"
                    wins="7"
                    defeats="21"
                    draws="8"
                    goalsScored="-29"
                    />

                    <RelegatedRow 
                    id="20"
                    position="20"
                    image={Juventude}
                    teamName="Juventude"
                    points="21"
                    wins="3"
                    defeats="21"
                    draws="12"
                    goalsScored="-37"
                    />
                </tbody>
            </table>
        </BrasileiraoContainer>
    )
}