import styled from "styled-components";

export const VenueCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;

    gap: 1rem;

    width: 22.5rem;
    
    border: 5px solid ${props => props.theme["green-200"]};
    border-radius: 40px;

    color: ${props => props.theme["green-200"]};
    text-align: center;
`;

export const VenueInfoInputStyles = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.white};
    text-align: center;
`;

export const VenueNameInput = styled.h3`
    display: flex;
    line-break: loose;
    text-align: center;
`;
