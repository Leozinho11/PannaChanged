import { NewsTextContainer } from "../Styled";

import CristianoRonaldoPhoto from "./images/CristianoNewsPhoto.svg";

export function CristianoRonaldoNews(){
    return(
        <NewsTextContainer>
            <h1>Reserva de Portugal, Cristiano Ronaldo fala sobre negociações com time saudita.</h1>
            <img src={CristianoRonaldoPhoto} alt="" />
            <p>
            Cristiano Ronaldo se tornou reserva de Portugal durante a Copa do Mundo e, em meio à essa grande mudança na carreira do veterano de 37 anos, uma oferta bilionária está sendo cogitada. O atacante da seleção portuguesa, de acordo com informações do "Marca", teria aceitado uma proposta de 1,09 bilhão de reais, quantia essa que seria diluída num contrato válido até 2025. 
            <br />
            <br />
            Depois da classificação para as quartas de final da Copa do Mundo, Cristiano Ronaldo foi questionado em relação a proposta do Al Nassr, da Arábia Saudita. O atual reserva de Portugal não quis dar muitos detalhes sobre o tema, mas aproveitou para deixar claro que não existe qualquer tipo de acordo definido com os árabes. CR7 segue focado em tentar o título mundial para a seleção portuguesa. 
            <br />
            <br />
            "Não é verdade, não é verdade", afirmou o jogador logo depois da goleada de Portugal em cima da Suíça nas oitavas de final da Copa do Mundo.
            <br />
            <br />
            Vale lembrar que Cristiano Ronaldo pode superar Messi, Mbappé e Neymar caso acerte com o Al-Nassr, da Arábia Saudita. O atacante, se aceitar a oferta do clube árabe, se tornará o jogador de futebol mais bem pago da atualidade. O veterano de 37 anos de idade receberá num contrato válido até 2025 um valor de 1,09 bilhão de reais. Essa quantia nunca foi paga a qualquer outro futebolista na história do esporte. 
            </p>
        </NewsTextContainer>
    )
}