import styled from "styled-components";

export const NewsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    gap: 1rem;

    border: 5px solid ${props => props.theme["green-200"]};
    border-radius: 35px;

    img{
        height: fit-content;
        width: 23rem;
        border-radius: 35px;
    }

    h3, a{
        color: ${props => props.theme["green-200"]};
        text-align: center;
        width: 23rem;
    }

    &:hover{
        background-color: ${props => props.theme["gray-600"]};
    }
`;