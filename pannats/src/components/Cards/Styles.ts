import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;


    width: 22.5rem;
    
    border: 5px solid ${props => props.theme["green-200"]};
    border-radius: 40px;

    color: ${props => props.theme["green-200"]};
    text-align: center;

    h3{
        line-break: loose;
    }
`;