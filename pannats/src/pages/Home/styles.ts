import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 14rem;
`;

export const MainPhotoContainer = styled.div`
    display: flex;

    height: 45rem;
    width: 45rem;
`;

export const MainTextContainer = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

    margin-top: 4.5rem;
    margin-left: 6rem;

    color: ${props => props.theme["green-200"]};

    h1{
        font-weight: 700;
    }

    h3{
        font-size: 1.5rem;
    }
`;