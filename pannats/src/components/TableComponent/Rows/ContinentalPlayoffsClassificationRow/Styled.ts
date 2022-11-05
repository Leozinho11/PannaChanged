import styled from "styled-components";

export const PlayoffRow = styled.tr`
    display: flex;
    background-color: ${props => props.theme["green-100"]};

        img{
            height: 2rem;
            width: 2rem;
        }
`;