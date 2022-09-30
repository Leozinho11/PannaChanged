import styled from "styled-components";

export const FirstButtonContainer = styled.button`
    display: flex;

    text-align: center;
    justify-content: center;
    align-items: center;

    width: 12.5rem;

    font-size: 1.25rem;
    padding: 1rem;

    margin-top: 1rem;

    background: ${props => props.theme["green-200"]};
    color: ${props => props.theme.white};

    border: none;
    border-radius: 15px;

    svg{
        display: none;
    }

    &:hover{
        gap: 0.5rem;

        svg{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;