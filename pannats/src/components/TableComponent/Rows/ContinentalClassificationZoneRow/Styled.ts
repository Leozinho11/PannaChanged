import styled from "styled-components";

export const ContinentalClassificationRow = styled.tr`
    display: flex;
    background-color: ${props => props.theme["green-200"]};

    img{
        height: 2rem;
        width: 2rem;
    }
`;