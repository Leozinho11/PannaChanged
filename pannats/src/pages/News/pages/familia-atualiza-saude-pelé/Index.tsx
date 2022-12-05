import { NewsTextContainer } from "../Styled";

import PelePhoto from "../../NewsLobby/images/Pele.svg"

export function PeleSaudeNews(){
    return(
        <NewsTextContainer>
            <img src={PelePhoto} alt="" />
            <p>
             Na noite deste domingo, 4 de dezembro, o “Fantástico” exibiu uma entrevista com as filhas de Pelé, Kely e Flávia, e o neto, Arthur. Na tela da Globo, elas atualizaram o estado de saúde do pai e responderam às várias especulações que rondam o futebol ao redor do mundo – principalmente durante a Copa do Catar.
             <br />
             <br />
             Pelé está internado no hospital Albert Einstein em São Paulo. O último boletim médico afirma que o estado de saúde do Rei do Futebol é estável. É o que a família reforça com fé e esclarecimento. Os parentes também resistem para desmentir especulações.
             <br />
             <br />
             Pelé trata um câncer no Colon há algum tempo. Então, quimioterapia já é uma rotina de sua vida. Além disso, recentemente enfrentou uma infecção por Covid-19, o que resultou na infecção respiratória – que o levou ao hospital agora. Kely explicou o caso:
             <br />
             <br />
             “Umas três semanas atrás, ele teve Covid. Ele está vacinado, com todas as doses possíveis, mas por causa do medicamento do câncer e da quimioterapia, ele está fragilizado. [Então], ele pegou uma infecção no pulmão. Por isso, foi para o hospital”.
             <br />
             <br />
             A respeito do câncer, Flávia falou a respeito. De acordo com ela, os medicamentos vão se ajustando a cada fase do tratamento – e é isso que a equipe de oncologia tem feito. A filha do Rei ainda destaca que o sucesso de qualquer evolução é o pai estar vivo.
             <br />
             <br />
             “Eu não gosto de falar que o tratamento não deu certo. Claro que deu. Está dando. Enquanto ele estiver aqui, está dando. É que de tempos em tempos eles vão ajustando a medicação, para ver o melhor”, explica Flávia.
            <br />
            <br />
            Ela finaliza seu discurso falando na injustiça de alguns diagnósticos, que falam em ‘estado paliativo’ ou ‘estado terminal’ para o pai. “É muito injusto falarem que ele está em tratamento paliativo, em estado terminal, não é isso”.
            </p>
        </NewsTextContainer>
    )
}