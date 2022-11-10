import { NullSpace } from "./Styled";
import { TableHeaderContainer } from "./Styled";

export function TableAtributes() {
    return(
        <TableHeaderContainer>
            <NullSpace>&nbsp;</NullSpace>
            <NullSpace>&nbsp;</NullSpace>
            <th>TIME</th>
            <th>PONTOS</th>
            <th>V</th>
            <th>D</th>
            <th>E</th>
            <th>SG</th>
        </TableHeaderContainer>
    )
}