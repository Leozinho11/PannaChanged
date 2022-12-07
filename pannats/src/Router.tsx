import {Routes, Route} from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout/Index';
import { Home } from './pages/Home/Index';
import Login from './pages/login/login-page';
import { Matches } from './pages/Matches/Index';
import { NewsLobby } from './pages/News/NewsLobby/Index';
import { CristianoRonaldoNews } from './pages/News/pages/cristiano-ronaldo-negociacoes-arabia-saudita/Index';
import { CruzeiroDemissaoNews } from './pages/News/pages/cruzeiro-demissao-gerente-futebol/Index';
import { PeleSaudeNews } from './pages/News/pages/familia-atualiza-saude-pelé/Index';
import { EndrickRealMadridNews } from './pages/News/pages/real-madrid-negociacoes-endrick/Index';
import { BrasileiraoTablePage } from './pages/Tables/Leagues/Brasileirão/Index';
import { BundesligaTablePage } from './pages/Tables/Leagues/Bundesliga/Index';
import { LaLigaTablePage } from './pages/Tables/Leagues/LaLiga/Index';
import { Ligue1TablePage } from './pages/Tables/Leagues/Ligue1/Index';
import { PremierLeagueTablePage } from './pages/Tables/Leagues/PremierLeague/Index';
import { SerieATablePage } from './pages/Tables/Leagues/SerieA/Index';
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
            <Route path='/bundesliga' element={<BundesligaTablePage />} />
            <Route path='/laliga' element={<LaLigaTablePage />} />
            <Route path='/ligue1' element={<Ligue1TablePage />} />
            <Route path='/premierleague' element={<PremierLeagueTablePage />} />
            <Route path='/seriea' element={<SerieATablePage />} />
            
            <Route path='/login' element={<Login/>}/>

            <Route path='/familia-atualiza-estado-de-saude-de-pele' element={<PeleSaudeNews />} />
            <Route path='/gerente-de-futebol-do-cruzeiro-anuncia-demissao' element={<CruzeiroDemissaoNews />} />
            <Route path='/real-madrid-avanca-por-endrick' element={<EndrickRealMadridNews />} />
            <Route path='/cristiano-ronaldo-fala-sobre-futuro' element={<CristianoRonaldoNews />} />
            </Route>
        </Routes>
    )
}