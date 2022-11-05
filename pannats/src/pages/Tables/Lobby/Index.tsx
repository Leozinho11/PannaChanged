import { TableCard } from "../../../components/TablesCard/Index";
import { TablesLobbyContainer, TablesLobbyMainContent } from "./Styles";

import Brasileirao from "./Images/Brasileirao.svg";
import Bundesliga from "./Images/Bundesliga.svg";
import PremierLeague from "./Images/PremierLeague.svg";
import Laliga from "./Images/Laliga.svg";
import Ligue1 from "./Images/Ligue1.svg";
import SerieA from "./Images/SerieA.svg";

export function TablesLobby(){
    return(
        <TablesLobbyContainer>
            <TablesLobbyMainContent>
                <TableCard 
                image={Brasileirao}
                ButtonName="Brasileirão Série A 2022"
                DirectedTo="/brasileirao"
                />

                <TableCard 
                image={Bundesliga}
                ButtonName="Campeonato Alemão"
                DirectedTo=""
                />

                <TableCard 
                image={PremierLeague}
                ButtonName="Campeonato Inglês"
                DirectedTo=""
                />

                <TableCard 
                image={Laliga}
                ButtonName="Campeonato Espanhol"
                DirectedTo=""
                />

                <TableCard 
                image={Ligue1}
                ButtonName="Campeonato Francês"
                DirectedTo=""
                />

                <TableCard 
                image={SerieA}
                ButtonName="Campeonato Italiano"
                DirectedTo=""
                />

            </TablesLobbyMainContent>
        </TablesLobbyContainer>
    )
}