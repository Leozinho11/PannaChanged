import styled from "styled-components";

export const FirstButtonContainer = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    margin-top: 1rem;

        button{
            display: flex;

            text-align: center;
            justify-content: center;
            align-items: center;

            font-size: 1.25rem;
            padding: 2rem;

            background: ${props => props.theme["gray-700"]};
            color: ${props => props.theme.white};

            border:${props => props.theme["green-200"]};
            border-radius: 15px;

            box-shadow: 0 0 40px 40px ${props => props.theme["green-200"]} inset, 0 0 0 0 ${props => props.theme["green-200"]};
           
            -webkit-transition: all 150ms ease-in-out;
            transition: all 150ms ease-in-out;
            
            &:hover{
                color: ${props => props.theme["green-200"]};

                box-shadow: 0 0 10px 0 ${props => props.theme["green-200"]} inset, 0 0 10px 4px ${props => props.theme["green-200"]};
            }
        }
`;