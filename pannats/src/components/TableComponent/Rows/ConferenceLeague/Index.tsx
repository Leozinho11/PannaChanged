import { ConferenceLeagueRowContainer } from "./Styled";
import { TableProps } from "../../../../reducers/Table/reducer"; 

export function ConferenceLeagueRow({defeats, draws, goalsScored, image, points, position, teamName, wins}:TableProps){
    return(
        <ConferenceLeagueRowContainer key={position}>
                    <td>{position}</td>
                    <td><img src={image} alt="" /></td>
                    <td>{teamName}</td>
                    <td>{points}</td>
                    <td>{wins}</td>
                    <td>{defeats}</td>
                    <td>{draws}</td>
                    <td>{goalsScored}</td>
        </ConferenceLeagueRowContainer>
    )
}