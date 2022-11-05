import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
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
                     points="77"
                     wins="22"
                     defeats="2"
                     draws="11"
                     goalsScored="41"
                    />

                    <ContinentalClassification 
                     id="2"
                     position="2"
                     image={Internacional}
                     teamName="Internacional"
                     points="64"
                     wins="17"
                     defeats="5"
                     draws="13"
                     goalsScored="21"
                    />

                    <ContinentalClassification 
                     id="3"
                     position="3"
                     image={Flamengo}
                     teamName="Flamengo"
                     points="61"
                     wins="18"
                     defeats="10"
                     draws="7"
                     goalsScored="23"
                    />

                    <ContinentalClassification 
                     id="4"
                     position="4"
                     image={Fluminense}
                     teamName="Fluminense"
                     points="61"
                     wins="18"
                     defeats="10"
                     draws="7"
                     goalsScored="16"
                    />
                </tbody>
            </table>
        </BrasileiraoContainer>
    )
}