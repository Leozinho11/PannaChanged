import styled from "styled-components";

export const NewsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    gap: 1rem;

    border: none;

    img{
        height: fit-content;
        width: fit-content;
        border-radius: 35px;
    }
`;