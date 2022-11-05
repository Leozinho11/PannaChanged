import { RelegatedZoneRow } from "./Styled";

import { TableProps } from "../../../../reducers/Table/reducer";

export function RelegatedRow({defeats, draws, goalsScored, id, image, points, position, teamName, wins}: TableProps) {
    return(
        <RelegatedZoneRow id={id}>
                <td>{position}</td>
                <td><img src={image} alt="" /></td>
                <td>{teamName}</td>
                <td>{points}</td>
                <td>{wins}</td>
                <td>{defeats}</td>
                <td>{draws}</td>
                <td>{goalsScored}</td>
        </RelegatedZoneRow>
    )
}