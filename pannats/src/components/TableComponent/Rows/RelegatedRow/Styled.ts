import styled from "styled-components";

export const RelegatedZoneRow = styled.tr`
    display: flex;
    background-color: ${props => props.theme["red-200"]};

    img{
        width: 2rem;
        height: 2rem;
    }
`;