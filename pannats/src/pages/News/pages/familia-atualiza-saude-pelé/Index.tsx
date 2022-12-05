import { NewsTextContainer } from "../Styled";

import PelePhoto from "../../NewsLobby/images/Pele.svg"

export function PeleSaudeNews(){
    return(
        <NewsTextContainer>
            <img src={PelePhoto} alt="" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure rerum nisi quas voluptatem totam, eligendi placeat laudantium ratione laborum, eaque voluptate unde fuga animi, earum temporibus eius eos at consequuntur?
            </p>
        </NewsTextContainer>
    )
}