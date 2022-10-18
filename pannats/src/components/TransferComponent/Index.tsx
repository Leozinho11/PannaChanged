import { CaretDoubleRight } from "phosphor-react";
import { PlayerContainer, PlayerNameText, StatusColor, StatusContainer, StatusText, TransferComponentContainer } from "./styled";

interface TransferProps{
    PlayerImage: string,
    PlayerName: string,
    Status: string,
    StatusType: string,
    LastTeam: string,
    CurrentTeam: string
}

export function TransferComponent({PlayerImage, PlayerName, Status, StatusType, LastTeam, CurrentTeam}:TransferProps){
    return(
        <TransferComponentContainer>
            <PlayerContainer>
                <img src={PlayerImage} alt="" />
                <PlayerNameText>{PlayerName}</PlayerNameText>
            </PlayerContainer>
            <img src={LastTeam} alt="" />
            <StatusContainer>
                <StatusText>{Status}</StatusText>
                {StatusType == 'Venda confirmada' && (
                    <StatusColor statusColor="green">
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                    </StatusColor>
                )}

                {StatusType == 'Empréstimo' && (
                    <StatusColor statusColor="green">
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                    </StatusColor>
                )}

                {StatusType == 'Em negociação' && (
                    <StatusColor statusColor="yellow">
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                    </StatusColor>
                )}

                {StatusType == 'Rumor' && (
                    <StatusColor statusColor="red">
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                        <CaretDoubleRight size={40} />
                    </StatusColor>
                )}
            </StatusContainer>
            <img src={CurrentTeam} alt="" />
        </TransferComponentContainer>
    )
}