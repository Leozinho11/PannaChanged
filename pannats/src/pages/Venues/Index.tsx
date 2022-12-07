import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Index";
import { VenuesCard } from "../../components/VenueCard/Index";
import { VenuesContainer } from "./Styles";

export function Venues(){
    return(
        <VenuesContainer>
            <NavLink to={"/login"}>
            <Button name={"ENTRAR"} />
            </NavLink>
            
            <VenuesCard 
            VenueName={"BR-10"} 
            Address={"Avenida Sapopemba"} 
            AddressNumber={12.925} 
            Phone={"(11) 94707-3147"} 
            Owner={"Shirley"} 
            SeparateRent={250} 
            SeparateRentPeriod={"1h30"} 
            MonthlyRent={600} 
            MonthlyRentPeriod={1} 
            OpeningHour={"17:00"} 
            CloseHour={"00:00"} 
            />
        </VenuesContainer>
    )
}