import {Routes, Route} from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout/Index';
import { Home } from './pages/Home/Index';
import { Matches } from './pages/Matches/Index';
import { NewsLobby } from './pages/News/NewsLobby/Index';
import { BrasileiraoTablePage } from './pages/Tables/Leagues/Brasileirão/Index';
import { TablesLobby } from './pages/Tables/Lobby/Index';
import { Transfers } from './pages/Transfers/Index';
import { Venues } from './pages/Venues/Index';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/partidas' element={<Matches />} />
            <Route path='/noticias' element={<NewsLobby />} />
            <Route path='/tabelas' element={<TablesLobby />} />
            <Route path='/quadras' element={<Venues />} />
            <Route path='/transferencias' element={<Transfers />} />

            <Route path='/brasileirao' element={<BrasileiraoTablePage />} />
            </Route>
        </Routes>
    )
}