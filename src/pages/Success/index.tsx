import { IconBadge, MainContainer, SessionContainer, SessionInformations, SuccessHeader } from "./style";

import ilustration from "../../assets/man-riding-motocycle.png"
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

export function Success() {
    return (
        <MainContainer>
            <SuccessHeader>
                <h1>Uhul! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você!</h2>
            </SuccessHeader>

            <SessionContainer>
                <SessionInformations>
                    
                    <div style={{display: "flex", gap: 12, alignItems: "center"}}>
                        <IconBadge color="purple">
                            <MapPin size={16} weight="fill" />
                        </IconBadge>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong> - Farrapos - Porto Alegre, RS</p>
                        </div>
                    </div>

                    <div style={{display: "flex", gap: 12, alignItems: "center"}}>
                        <IconBadge color="gold">
                            <Clock size={16} weight="fill" />
                        </IconBadge>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min </strong></p>
                        </div>
                    </div>

                    <div style={{display: "flex", gap: 12, alignItems: "center"}}>
                        <IconBadge color="burnt-yellow">
                            <CurrencyDollar size={16} weight="fill" />
                        </IconBadge>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p>Pagamento na entrega</p>
                            <p><strong>Cartão de Crédito</strong></p>
                        </div>
                    </div>

                </SessionInformations>

                <img src={ilustration} alt="Homem pardo com roupas amarelo e verde andando em uma motocicleta roxa com uma caixa de correspondências na garupa." />
            </SessionContainer>
        </MainContainer>
    )
}