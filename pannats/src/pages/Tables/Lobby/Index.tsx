import { TableCard } from "../../../components/TablesCard/Index";
import { TablesLobbyContainer, TablesLobbyMainContent } from "./Styles";

import Brasileirao from "./Images/Brasileirao.svg"

export function TablesLobby(){
    return(
        <TablesLobbyContainer>
            <TablesLobbyMainContent>
                <TableCard 
                image={Brasileirao}
                ButtonName="Brasileirão Série A 2022"
                DirectedTo=""
                />

            </TablesLobbyMainContent>
        </TablesLobbyContainer>
    )
}