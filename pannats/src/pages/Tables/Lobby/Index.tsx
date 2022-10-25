import { TablesLobbyContainer } from "./Styles";

export function TablesLobby(){
    return(
        <TablesLobbyContainer>
                <div id="wg-api-football-standings"
                data-host="v3.football.api-sports.io"
                data-key="a64edda0b3f04330e1e1929db4faa634"
                data-league="39"
                data-team=""
                data-season="2021"
                data-theme=""
                data-show-errors="false"
                data-show-logos="true"
                className="wg_loader">
            </div>
            <script
                type="module"
                src="https://widgets.api-sports.io/2.0.3/widgets.js">
            </script>
        </TablesLobbyContainer>
    )
}