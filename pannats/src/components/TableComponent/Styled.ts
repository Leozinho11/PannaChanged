import styled from "styled-components";

export const TableContainer = styled.table`
    display: flex;
    flex-direction: column;
`;

export const TableAtributes = styled.thead`
    display: flex;
`;

export const NullSpace = styled.td`
    border: none;
`;

export const TableMainContent = styled.tbody`
    display: flex;
    flex-direction: column;
`;

export const ContinentalClassification = styled.tr`
    background-color: ${props => props.theme["green-200"]};

    img{
        height: 2rem;
        width: 2rem;
    }
`;

export const ContinentalPlayoff = styled(ContinentalClassification)`
    background-color: ${props => props.theme["green-100"]};
`;

export const SubcontinentalClassification = styled(ContinentalClassification)`
    background-color: ${props => props.theme["yellow-200"]};
`;

export const NoChangesStandings = styled(ContinentalClassification)`
    background-color: ${props => props.theme["gray-700"]};
`;

export const RelegationZone = styled(ContinentalClassification)`
    background-color: ${props => props.theme["red-200"]};
`;

