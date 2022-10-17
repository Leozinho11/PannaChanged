import { CaretDoubleRight } from "phosphor-react";
import { PlayerContainer, PlayerNameText, StatusContainer, StatusText, TransferComponentContainer } from "./styled";

interface TransferProps{
    PlayerImage: string,
    PlayerName: string,
    Status: string,
    LastTeam: string,
    CurrentTeam: string
}

export function TransferComponent({PlayerImage, PlayerName, Status, LastTeam, CurrentTeam}:TransferProps){
    return(
        <TransferComponentContainer>
            <PlayerContainer>
                <img src={PlayerImage} alt="" />
                <PlayerNameText>{PlayerName}</PlayerNameText>
            </PlayerContainer>
            <img src={LastTeam} alt="" />
            <StatusContainer>
                <StatusText>{Status}</StatusText>
                <CaretDoubleRight size={40} />
            </StatusContainer>
            <img src={CurrentTeam} alt="" />
        </TransferComponentContainer>
    )
}