import { NewsTextContainer } from "../Styled";

import GerentePhoto from "./images/GerentedeFutebol.svg";

export function CruzeiroDemissaoNews(){
    return(
        <NewsTextContainer>
            <h1>Gerente de futebol do Cruzeiro anuncia demissão</h1>
            <img src={GerentePhoto} alt="" />
            <p>
            O Cruzeiro tem mudança no seu departamento de futebol. Nesta terça-feira, o gerente do futebol profissional, Luiz Kriwat, comunicou a saída do clube.
            <br />
            <br />
            Kriwat havia sido alçado ao profissional do Cruzeiro no começo do ano. Vinha trabalhando numa linha auxiliar e secundária na gestão profissional, ajudando também na parte da transição. Antes, trabalhara na base da Raposa.
            <br />
            <br />
            - Foram 2 anos na Base com um desafio claro: sobreviver. A crise financeira impunha situações das mais complicadas que iam desde tomadas de decisão à falta de energia elétrica. Gerenciar é escolher, mas gerenciar sem escolhas exige muito de cada um dos lideres. Após 2 anos, a base sobreviveu e com muito orgulho hoje digo que construi relações sólidas com pessoas competentes e que trabalharam e trabalham com muito afinco pelo Clube.
            </p>
        </NewsTextContainer>
    )
}