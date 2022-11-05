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
    cursor: pointer;
}

button{
    cursor: pointer;
}

body{
    height: 75rem;
    background: ${props => props.theme["gray-700"]};
    color: ${props => props.theme.white};
    --webkit-font-smoothing: antialiased;
}

body, a, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

    table, th, td{
        border: 1px solid ${props => props.theme["green-200"]};
        border-radius: 10px;
        padding: 0.5rem;
    }
`;