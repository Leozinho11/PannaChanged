import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
`;

export const PannaButton = styled.button`
    display: flex;
    flex-direction: row;

    background: ${props => props.theme["green-200"]};
    color: ${props => props.theme.white};
    border: solid ${props => props.theme["green-200"]};
    border-radius: 16px;
    
    text-align: center;
    text-transform: uppercase;
    padding: 1rem;

    transition: background-color 0.2s;

    &:hover{
        background-color: transparent;
        color: ${props => props.theme["green-200"]};
    }
`;