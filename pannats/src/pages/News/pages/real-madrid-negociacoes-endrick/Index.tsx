import { NewsTextContainer } from "../Styled";

import EndrickPhoto from "./images/EndrickPhotoNews.svg";

export function EndrickRealMadridNews(){
    return(
        <NewsTextContainer>
            <h1>Real Madrid avança nas negiciações e fica muito perto de contratar Endrick do Palmeiras.</h1>
            <img src={EndrickPhoto} alt="" />
            <p>
            O Real Madrid está pronto para ser a partir do segundo semestre de 2024. 
            Os merengues acertaram nesta terça-feira (6) os últimos detalhes da avançada negociação com o jovem atacante do Palmeiras e, agora, aguardam apenas a assinatura do acordo.
            <br />
            <br />
            Depois de recusar o PSG, o Verdão aceitou vender a promessa de 16 anos para o Real por um montante que, entre fixo e variáveis, vai bater o valor da multa rescisão de 60 milhões de euros (R$ 331 milhões)
            <br />
            <br />
            O preço final da transferência do goleador de 16 anos ainda vai incluir pagamentos de questões tributárias na Espanha, que ficarão a cargo do Real Madrid, e comissões para intermediários.
            <br />
            <br />
            À espera de mais preponderância no Palmeiras com Abel Ferreira na próxima temporada, Endrick, vale lembrar, só vai poder reforçar o Real Madrid quando completar 18 anos (a partir de julho de 2024).
            </p>
        </NewsTextContainer>
    )
}