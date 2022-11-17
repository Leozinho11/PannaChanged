import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { ContinentalPlayoffClassificationRow } from "../../../../components/TableComponent/Rows/ContinentalPlayoffsClassificationRow/Index";
import { NoChangesZoneRow } from "../../../../components/TableComponent/Rows/NoChangesRow/Index";
import { RelegatedRow } from "../../../../components/TableComponent/Rows/RelegatedRow/Index"
import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { BrasileiraoContainer } from "./Styled";

import AmericaMG from '../../../../assets/Teams/Brasileirao/AmericaMG.svg';
import AthleticoPR from '../../../../assets/Teams/Brasileirao/AthleticoPR.svg';
import AtleticoGO from '../../../../assets/Teams/Brasileirao/AtleticoGO.svg';
import AtleticoMG from '../../../../assets/Teams/Brasileirao/AtleticoMG.svg';
import Avai from '../../../../assets/Teams/Brasileirao/Avai.svg';
import Botafogo from '../../../../assets/Teams/Brasileirao/Botafogo.svg';
import Ceara from '../../../../assets/Teams/Brasileirao/Ceara.svg';
import Corinthians from '../../../../assets/Teams/Brasileirao/Corinthians.svg';
import Coritiba from '../../../../assets/Teams/Brasileirao/Coritiba.svg';
import Cuiaba from '../../../../assets/Teams/Brasileirao/Cuiaba.svg';
import Flamengo from '../../../../assets/Teams/Brasileirao/Flamengo.svg';
import Fluminense from '../../../../assets/Teams/Brasileirao/Fluminense.svg';
import Fortaleza from '../../../../assets/Teams/Brasileirao/Fortaleza.svg';
import Goias from '../../../../assets/Teams/Brasileirao/Goias.svg';
import Internacional from '../../../../assets/Teams/Brasileirao/Internacional.svg';
import Juventude from '../../../../assets/Teams/Brasileirao/Juventude.svg';
import Palmeiras from '../../../../assets/Teams/Brasileirao/Palmeiras.svg';
import RBBragantino from '../../../../assets/Teams/Brasileirao/RBBragantino.svg';
import Santos from '../../../../assets/Teams/Brasileirao/Santos.svg';
import SaoPaulo from '../../../../assets/Teams/Brasileirao/SaoPaulo.svg';




export function BrasileiraoTablePage() {
    return(
        <BrasileiraoContainer>
            <table>
                <TableAtributes />
                <tbody>
                    <ContinentalClassification 
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