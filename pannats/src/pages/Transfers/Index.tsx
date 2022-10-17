import { TransferComponent } from "../../components/TransferComponent/Index";
import { TrasnfersContainer } from "./styled";
import BorussiaDortmundPhoto from './images/Teams/BorussiaDortmund.svg';
import ManchesterCityPhoto from './images/Teams/ManchesterCity.svg';
import HaalandPhoto from './images/Players/Haaland.svg'

export function Transfers(){
    return(
        <TrasnfersContainer>
            <TransferComponent 
            PlayerImage={HaalandPhoto} 
            PlayerName={"Erling Haaland"} 
            LastTeam={BorussiaDortmundPhoto} 
            Status={"Venda confirmada - Contrato até 2027"} 
            CurrentTeam={ManchesterCityPhoto}            
            />
        </TrasnfersContainer>
    )
}