import { PlayoffRow } from "./Styled";

import { TableProps } from "../../../../reducers/Table/reducer";

export function ContinentalPlayoffClassificationRow({defeats, draws, goalsScored, id, image, points, position, teamName, wins} :TableProps) {
    return(
        <PlayoffRow id={id}>
                <td>{position}</td>
                <td><img src={image} alt="" /></td>
                <td>{teamName}</td>
                <td>{points}</td>
                <td>{wins}</td>
                <td>{defeats}</td>
                <td>{draws}</td>
                <td>{goalsScored}</td>
        </PlayoffRow>
    )
}