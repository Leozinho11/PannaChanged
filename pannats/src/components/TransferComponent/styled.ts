import styled from "styled-components";

export const TransferComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    img{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 999px;

        width: 3rem;
        height: 3rem;
    }
`;

export const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PlayerNameText = styled.p`
    display: flex;
    flex-direction: row;
`;

const STATUS_COLORS = {
    yellow: 'yellow-200',
    green: 'green-200',
    red: 'red-200'
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StatusText = styled.p`
    display: flex;
    flex-direction: row;
`;

export const StatusColor = styled.div<StatusProps>`
    svg{
        color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`;