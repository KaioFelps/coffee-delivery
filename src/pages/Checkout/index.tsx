import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Box } from "../../styles/global";
import { FormContent, BoxHeader, FormWrapper, InputRow, MainContainer, Section } from "./style";
import { defaultTheme } from "../../styles/themes/default"
import { PaymentMethodRadio, PaymentMethodsContainer } from "./radioStyles";

export function Checkout() {
    return (
        <MainContainer>
            <Section>
                <h2>Complete seu pedido</h2>

                <Box>
                    <FormWrapper>
                        <BoxHeader>
                            <MapPinLine color={defaultTheme["yellow-500"]} size={24} />
                            <div>
                                <h3>Endereço de entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </BoxHeader>

                        <FormContent>
                            <input id="cep" title="cep" placeholder="CEP" style={{width: "36%", maxWidth: 200}} type="text" />
                            <input id="rua" title="rua" placeholder="Rua" style={{gridArea: "street"}} type="text" />
                            <InputRow>
                                <input id="numero" title="número" placeholder="Número" style={{width: "32%", maxWidth: 200}} type="text" />
                                <input id="complemento" title="complemento" placeholder="Complemento" style={{gridArea: "complement"}} type="text" />
                            </InputRow>
                            <InputRow>
                                <input id="bairro" title="bairro" placeholder="Bairro" style={{width: "56%", maxWidth: 200}} type="text" />
                                <input id="cidade" title="cidade" placeholder="Cidade" style={{gridArea: "city"}} type="text" />
                                <input id="estado" title="estado" placeholder="UF" style={{width: 60}} type="text" />
                            </InputRow>
                        </FormContent>
                    </FormWrapper>
                </Box>
                <Box style={{marginTop: 12}}>
                    <BoxHeader>
                            <CurrencyDollar color={defaultTheme["purple-500"]} size={24} />
                            <div>
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega, escolha a forma com que deseja pagar.</p>
                            </div>
                    </BoxHeader>
                    
                    <PaymentMethodsContainer>
                        <PaymentMethodRadio value="credit">
                            <CreditCard size={16} weight="light" />
                            Cartão de Crédito
                        </PaymentMethodRadio>
                        
                        <PaymentMethodRadio value="debit">
                            <Bank size={16} weight="light" />
                            Cartão de Débito
                        </PaymentMethodRadio>

                        <PaymentMethodRadio value="cash">
                            <Money size={16} weight="light" />
                            Dinheiro
                        </PaymentMethodRadio>
                    </PaymentMethodsContainer>
                </Box>
            </Section>

            <Section>
                <h2>Cafés selecionados</h2>

                <Box>
                </Box>
            </Section>
        </MainContainer>
    )
}