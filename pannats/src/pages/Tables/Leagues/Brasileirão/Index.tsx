import { ContinentalClassification } from "../../../../components/TableComponent/Rows/ContinentalClassificationZoneRow/Index";
import { SubContinentalClassificationRow } from "../../../../components/TableComponent/Rows/SubContinentalClassificationRow/Index";
import { TableAtributes } from "../../../../components/TableComponent/THeader/Index";
import { BrasileiraoContainer } from "./Styled";

export function BrasileiraoTablePage() {
    return(
        <BrasileiraoContainer>
            <table>
                <TableAtributes />
                <tbody>
                    <ContinentalClassification 
                     id="1"
                     position="1"
                     image=""
                     teamName=""
                     points=""
                     wins=""
                     defeats=""
                     draws=""
                     goalsScored=""
                    />

                    <ContinentalClassification 
                     id="2"
                     position="2"
                     image=""
                     teamName=""
                     points=""
                     wins=""
                     defeats=""
                     draws=""
                     goalsScored=""
                    />

                    <ContinentalClassification 
                     id="3"
                     position="3"
                     image=""
                     teamName=""
                     points=""
                     wins=""
                     defeats=""
                     draws=""
                     goalsScored=""
                    />

                    <ContinentalClassification 
                     id="4"
                     position="4"
                     image=""
                     teamName=""
                     points=""
                     wins=""
                     defeats=""
                     draws=""
                     goalsScored=""
                    />

                    <ContinentalClassification 
                     id="5"
                     position="5"
                     image=""
                     teamName=""
                     points=""
                     wins=""
                     defeats=""
                     draws=""
                     goalsScored=""
                    />

                    <ContinentalClassification 
                     id="6"
                     position="6"
                     image=""
                     teamName=""
                     points=""
                     wins=""
                     defeats=""
                     draws=""
                     goalsScored=""
                    />

                    
                </tbody>
            </table>
        </BrasileiraoContainer>
    )
}