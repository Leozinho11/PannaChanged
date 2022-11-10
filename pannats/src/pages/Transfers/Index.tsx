import { TransferComponent } from "../../components/TransferComponent/Index";
import { TransfersContainer} from "./styled";

import BorussiaDortmundPhoto from './images/Teams/BorussiaDortmund.svg';
import ManchesterCityPhoto from './images/Teams/ManchesterCity.svg';
import ChelseaPhoto from './images/Teams/Chelsea.svg';
import BarcelonaPhoto from './images/Teams/Barcelona.svg';
import ManchesterUnitedPhoto from './images/Teams/ManchesterUnited.svg';
import BayernPhoto from './images/Teams/Bayern.svg';
import AjaxPhoto from './images/Teams/Ajax.svg';
import LiverpoolPhoto from './images/Teams/Liverpool.svg';
import BenficaPhoto from './images/Teams/Benfica.svg';
import InternazionalePhoto from './images/Teams/Internazionale.svg';
import RealMadridPhoto from './images/Teams/RealMadrid.svg';
import MonacoPhoto from './images/Teams/Monaco.svg';
import JuventusPhoto from './images/Teams/Juventus.svg';

import HaalandPhoto from './images/Players/Haaland.svg';
import AntonyPhoto from './images/Players/Antony.svg';
import CasemiroPhoto from './images/Players/Casemiro.svg';
import DarwinNuñezPhoto from './images/Players/DarwinNuñez.svg';
import DeLigtPhoto from './images/Players/DeLigt.svg';
import LewandowskiPhoto from './images/Players/Lewandowski.svg';
import LukakuPhoto from './images/Players/Lukaku.svg';
import ManéPhoto from './images/Players/Mané.svg';
import SterlingPhoto from './images/Players/Sterling.svg';
import TchouameniPhoto from './images/Players/Tchouameni.svg';

export function Transfers(){
    return(
        <TransfersContainer>
        <TransferComponent 
            PlayerImage={PedroRauPhotol} 
            PlayerName={"Endrick"} 
            LastTeam={''} 
            Status={"Venda confirmada - Contrato até 2027"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={ManchesterCityPhoto}            
            />

            <TransferComponent 
            PlayerImage={EndrickPhoto} 
            PlayerName={"Endrick"} 
            LastTeam={''} 
            Status={"Venda confirmada - Contrato até 2027"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={ManchesterCityPhoto}            
            />

            <TransferComponent 
            PlayerImage={HaalandPhoto} 
            PlayerName={"Erling Haalad"} 
            LastTeam={BorussiaDortmundPhoto} 
            Status={"Venda confirmada - Contrato até 2027"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={ManchesterCityPhoto}            
            />

            <TransferComponent 
            PlayerImage={AntonyPhoto} 
            PlayerName={"Antony"} 
            LastTeam={AjaxPhoto} 
            Status={"Venda confirmada - Contrato até 2027"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={ManchesterUnitedPhoto}            
            />

            <TransferComponent 
            PlayerImage={TchouameniPhoto} 
            PlayerName={"Aurélien Tchouameni"} 
            LastTeam={MonacoPhoto} 
            Status={"Venda confirmada - Contrato até 2028"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={RealMadridPhoto}            
            />

            <TransferComponent 
            PlayerImage={DarwinNuñezPhoto} 
            PlayerName={"Darwin Nuñez"} 
            LastTeam={BenficaPhoto} 
            Status={"Venda confirmada - Contrato até 2028"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={LiverpoolPhoto}            
            />

            <TransferComponent 
            PlayerImage={CasemiroPhoto} 
            PlayerName={"Casemiro"} 
            LastTeam={RealMadridPhoto} 
            Status={"Venda confirmada - Contrato até 2026"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={ManchesterUnitedPhoto}            
            />

            <TransferComponent 
            PlayerImage={DeLigtPhoto} 
            PlayerName={"Matthjis de Ligt"} 
            LastTeam={JuventusPhoto} 
            Status={"Venda confirmada - Contrato até 2027"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={BayernPhoto}            
            />

            <TransferComponent 
            PlayerImage={SterlingPhoto} 
            PlayerName={"Raheem Sterling"} 
            LastTeam={ManchesterCityPhoto} 
            Status={"Venda confirmada - Contrato até 2027"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={ChelseaPhoto}            
            />

            <TransferComponent 
            PlayerImage={ManéPhoto} 
            PlayerName={"Sadio Mané"} 
            LastTeam={LiverpoolPhoto} 
            Status={"Venda confirmada - Contrato até 2025"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={BayernPhoto}            
            />

            <TransferComponent 
            PlayerImage={LewandowskiPhoto} 
            PlayerName={"Robert Lewandowski"} 
            LastTeam={BayernPhoto} 
            Status={"Venda confirmada - Contrato até 2026"} 
            StatusType={"Venda confirmada"}
            CurrentTeam={BarcelonaPhoto}            
            />

            <TransferComponent 
            PlayerImage={LukakuPhoto} 
            PlayerName={"Romelu Lukaku"} 
            LastTeam={ChelseaPhoto} 
            Status={"Empréstimo até 2023"} 
            StatusType={"Empréstimo"}
            CurrentTeam={InternazionalePhoto}            
            />
        </TransfersContainer>
    )
}