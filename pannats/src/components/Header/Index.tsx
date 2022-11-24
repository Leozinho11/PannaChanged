import { HeaderContainer } from "./styles";
import { NavLink } from 'react-router-dom';
import LogoPanna from '../../assets/logoCopa.svg';

export function Header() {
    return(
        <HeaderContainer>
            <NavLink to='/' title="Home">
                <img src={LogoPanna} alt="" />
            </NavLink>

            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/noticias'>Noticias</NavLink>
                <NavLink to='/tabelas'>Tabelas</NavLink>
                <NavLink to='/partidas'>Partidas</NavLink>
                <NavLink to='/transferencias'>Transferências</NavLink>
                <NavLink to='/login'>Quadras</NavLink>
            </nav>
        </HeaderContainer>
    )
}