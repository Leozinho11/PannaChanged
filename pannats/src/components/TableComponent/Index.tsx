import { ContinentalClassification, NullSpace, TableAtributes, TableContainer, TableMainContent } from "./Styled";

interface TableProps{
    position: string
    image: string
    teamName: string
    points: string
    wins: string
    defeats: string
    draws: string
    goalsScored: string
}

export function TableComponent({position, image, teamName, points, wins, defeats, draws, goalsScored}:TableProps){
    return(
        <TableContainer>
            <TableAtributes>
                <tr>
                    <NullSpace>&nbsp;</NullSpace>
                    <NullSpace>&nbsp;</NullSpace>
                    <td>TIME</td>
                    <td>PONTOS</td>
                    <td>V</td>
                    <td>D</td>
                    <td>E</td>
                    <td>SG</td>
                </tr>
            </TableAtributes>

            <TableMainContent>
                <ContinentalClassification>
                    <td>{position}</td>
                    <td><img src={image} alt="" /></td>
                    <td>{teamName}</td>
                    <td>{points}</td>
                    <td>{wins}</td>
                    <td>{defeats}</td>
                    <td>{draws}</td>
                    <td>{goalsScored}</td>
                </ContinentalClassification>

                <ContinentalClassification>
                    <td>{position}</td>
                    <td><img src={image} alt="" /></td>
                    <td>{teamName}</td>
                    <td>{points}</td>
                    <td>{wins}</td>
                    <td>{defeats}</td>
                    <td>{draws}</td>
                    <td>{goalsScored}</td>
                </ContinentalClassification>

                <ContinentalClassification>
                    <td>{position}</td>
                    <td><img src={image} alt="" /></td>
                    <td>{teamName}</td>
                    <td>{points}</td>
                    <td>{wins}</td>
                    <td>{defeats}</td>
                    <td>{draws}</td>
                    <td>{goalsScored}</td>
                </ContinentalClassification>

                <ContinentalClassification>
                    <td>{position}</td>
                    <td><img src={image} alt="" /></td>
                    <td>{teamName}</td>
                    <td>{points}</td>
                    <td>{wins}</td>
                    <td>{defeats}</td>
                    <td>{draws}</td>
                    <td>{goalsScored}</td>
                </ContinentalClassification>

                <ContinentalClassification>
                    <td>{position}</td>
                    <td><img src={image} alt="" /></td>
                    <td>{teamName}</td>
                    <td>{points}</td>
                    <td>{wins}</td>
                    <td>{defeats}</td>
                    <td>{draws}</td>
                    <td>{goalsScored}</td>
                </ContinentalClassification>

                <ContinentalClassification>
                    <td>{position}</td>
                    <td><img src={image} alt="" /></td>
                    <td>{teamName}</td>
                    <td>{points}</td>
                    <td>{wins}</td>
                    <td>{defeats}</td>
                    <td>{draws}</td>
                    <td>{goalsScored}</td>
                </ContinentalClassification>
            </TableMainContent>
        </TableContainer>
    )
}