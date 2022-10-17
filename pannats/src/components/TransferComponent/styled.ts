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

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg{
        color: ${props => props.theme["green-200"]};
    }
`;

export const StatusText = styled.p`
    display: flex;
    flex-direction: row;
`;