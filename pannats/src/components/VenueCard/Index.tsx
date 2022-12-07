import { VenueCardContainer, VenueInfoInputStyles, VenueNameInput } from "./Styled";

interface VenuesCardProps{
    VenueName: string
    Address: string
    AddressNumber: number
    Phone: string|number
    Owner: string
    SeparateRent: number
    SeparateRentPeriod: string
    MonthlyRent: number
    MonthlyRentPeriod: number
    OpeningHour: string
    CloseHour: string
}

export function VenuesCard({Address, AddressNumber, MonthlyRent, Owner, Phone, SeparateRent, VenueName, MonthlyRentPeriod, SeparateRentPeriod, OpeningHour, CloseHour}:VenuesCardProps){
    return(
        <VenueCardContainer>
            <h3><VenueNameInput>{VenueName}</VenueNameInput></h3>
            <p>Endereço: <VenueInfoInputStyles>{Address}, {AddressNumber}</VenueInfoInputStyles></p>
            <p>Telefone: <VenueInfoInputStyles>{Phone}</VenueInfoInputStyles></p>
            <p>Falar com: <VenueInfoInputStyles>{Owner}</VenueInfoInputStyles></p>
            <p>Aluguel Avulso: <VenueInfoInputStyles>R$ {SeparateRent},00 durante {SeparateRentPeriod}</VenueInfoInputStyles></p>
            <p>Aluguel Mensal: <VenueInfoInputStyles>R$ {MonthlyRent},00 / {MonthlyRentPeriod} vez por semana.</VenueInfoInputStyles></p>
            <p>Horário de funcionamento: <VenueInfoInputStyles>Das {OpeningHour} às {CloseHour}</VenueInfoInputStyles></p>
        </VenueCardContainer>
    )
}