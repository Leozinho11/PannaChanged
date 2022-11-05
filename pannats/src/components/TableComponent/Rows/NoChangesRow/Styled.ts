import styled from "styled-components";

export const NoChangesStandings = styled.tr`
    display: flex;
    background-color: ${props => props.theme["gray-700"]};

    img{
        width: 2rem;
        height: 2rem;
    }
`;