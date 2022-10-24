import { ArrowFatLineRight } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { FirstButtonContainer } from "./Style";

export function FirstButton(){
    return(
        <FirstButtonContainer>
            <NavLink to='/noticias'>
                <button>
                VER NOTICIAS
                </button>
            </NavLink>
        </FirstButtonContainer>
    )
}