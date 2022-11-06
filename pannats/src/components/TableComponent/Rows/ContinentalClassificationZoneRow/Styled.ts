import styled from "styled-components";

export const ContinentalClassificationRow = styled.tr`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    align-self: flex-end;
    text-align: center;
    position: relative;
    background-color: ${props => props.theme["green-200"]};

    width: 21rem;

    td{
        display: flex;
        justify-items: center;
        align-items: center;
        text-align: right;
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