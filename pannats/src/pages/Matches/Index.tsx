import { MatchesContainer } from "./Styles";

export function Matches(){

    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "a64edda0b3f04330e1e1929db4faa634"
	}
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

    
    return(
        <MatchesContainer>
            <div id="wg-api-football-games"
            data-host="v3.football.api-sports.io"
            data-key="a64edda0b3f04330e1e1929db4faa634"
            data-date="2022-10-25"
            data-league=""
            data-season=""
            data-theme="dark"
            data-refresh="15"
            data-show-toolbar="true"
            data-show-errors="false"
            data-show-logos="true"
            data-modal-game="true"
            data-modal-standings="true"
            data-modal-show-logos="true">
            </div>

            <script type="module" src="https://widgets.api-sports.io/2.0.3/widgets.js">
            </script>
        </MatchesContainer>
    )
}