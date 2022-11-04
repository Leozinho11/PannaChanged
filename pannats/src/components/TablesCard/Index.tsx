import { NavLink } from "react-router-dom";
import { Button } from "../Button/Index";
import { TableCardContainer } from "./Styles";

interface TableCardProps{
    image: string
    DirectedTo: string
    ButtonName: string
}

export function TableCard({image, DirectedTo, ButtonName}:TableCardProps){
    return(
        <TableCardContainer>
            <img src={image} alt="" />
            <NavLink to={DirectedTo}>
                <Button name={ButtonName}/>
            </NavLink>
        </TableCardContainer>
    )
}