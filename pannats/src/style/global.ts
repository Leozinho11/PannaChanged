import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    background-color: transparent;
    color: ${props => props.theme.white};
    text-decoration: none;
}

body{
    background: ${props => props.theme["gray-700"]};
    color: ${props => props.theme.white};
    --webkit-font-smoothing: antialiased;
}

body, a, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`;