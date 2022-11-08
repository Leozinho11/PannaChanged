import styled from "styled-components";

export const SubcontinentalRow = styled.tr`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    align-self: flex-end;
    text-align: center;
    position: relative;
    background-color: ${props => props.theme["yellow-200"]};
    color: ${props => props.theme["gray-700"]};


    gap: 1rem;

    td{
        display: flex;
        width: 8rem;
        justify-items: center;
        align-items: center;
        text-align: right;
        margin-right: 1rem;
    }

    img{
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        height: 2rem;
        width: 2rem;
    }
`;