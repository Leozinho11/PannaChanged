import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    height: 5rem;

    background: ${props => props.theme["green-200"]};

    img{
        height: 5rem;
    }

    nav{
        display: flex;
        
        gap: 1rem;

        font-weight: 700;
    }
`;