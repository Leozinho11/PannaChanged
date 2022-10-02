import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
`;

export const PannaButton = styled.button`
    display: flex;
    flex-direction: row;

    background: ${props => props.theme["green-200"]};
    color: ${props => props.theme.white};
`;