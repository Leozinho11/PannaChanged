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
                <NavLink to=''>Tabelas</NavLink>
                <NavLink to=''>Partidas</NavLink>
            </nav>
        </HeaderContainer>
    )
}