import { MatchesComponentContainer, MatchesInfoContainer, MatchesScoreContainer, MatchesScoreInfoContainer, TeamInfo } from "./Styled";

interface MatchesComponentProps{
    date: string
    hour: number
    field: string
    homeTeamImg: string
    homeTeamName: string
    homeTeamScore: number
    awayTeamImg: string
    awayTeamName: string
    awayTeamScore: number
}

export function MatchesComponent({awayTeamImg, awayTeamName, awayTeamScore, date, field, homeTeamImg, homeTeamName, homeTeamScore, hour}:MatchesComponentProps){
    return(
        <MatchesComponentContainer>
            <MatchesInfoContainer>
                <p>{date} - {hour}h</p>
                <p>{field}</p>
            </MatchesInfoContainer>

            <MatchesScoreContainer>
                <MatchesScoreInfoContainer>
                    <TeamInfo>
                        <img src={homeTeamImg} alt="" />
                        <p>{homeTeamName}</p>
                    </TeamInfo>
                    <p>{homeTeamScore}</p>
                    <p>X</p>
                    <p>{awayTeamScore}</p>
                    <TeamInfo>
                        <img src={awayTeamImg} alt="" />
                        <p>{awayTeamName}</p>
                    </TeamInfo>
                </MatchesScoreInfoContainer>
            </MatchesScoreContainer>
        </MatchesComponentContainer>
    )
}