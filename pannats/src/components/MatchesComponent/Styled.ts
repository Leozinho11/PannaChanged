import styled from "styled-components";

export const MatchesComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

export const MatchesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    
    img{
        height: 3.5rem;
        width: 3.5rem;
    }
`;

export const MatchesScoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

export const MatchesScoreInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 20rem;
`;

export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 3.75rem;

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        width: 1rem;
    }
`;

export const TeamInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        height: 2rem;
        width: 2rem;
    }
`;