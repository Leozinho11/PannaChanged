import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5rem;
`;

export const MainPhotoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

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

export const MainCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    justify-content: center;
    gap: 1.25rem;
`;