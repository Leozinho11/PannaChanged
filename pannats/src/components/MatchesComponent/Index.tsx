import { MatchesComponentContainer, MatchesInfoContainer, MatchesScoreContainer, MatchesScoreInfoContainer, ScoreContainer, TeamInfo } from "./Styled";

interface MatchesComponentProps{
    competitonImg: string
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

export function MatchesComponent({awayTeamImg, awayTeamName, awayTeamScore, date, field, homeTeamImg, homeTeamName, homeTeamScore, hour, competitonImg}:MatchesComponentProps){
    return(
        <MatchesComponentContainer>
            <MatchesInfoContainer>
                <img src={competitonImg} alt="" />
                <p>{date} - {hour}h</p>
                <p>{field}</p>
            </MatchesInfoContainer>

            <MatchesScoreContainer>
                <MatchesScoreInfoContainer>
                    <TeamInfo>
                        <img src={homeTeamImg} alt="" />
                        <p>{homeTeamName}</p>
                    </TeamInfo>
                    
                    <ScoreContainer>
                        <p>{homeTeamScore}</p>
                        <p>X</p>
                        <p>{awayTeamScore}</p>
                    </ScoreContainer>
                
                    <TeamInfo>
                        <img src={awayTeamImg} alt="" />
                        <p>{awayTeamName}</p>
                    </TeamInfo>
                </MatchesScoreInfoContainer>
            </MatchesScoreContainer>
        </MatchesComponentContainer>
    )
}