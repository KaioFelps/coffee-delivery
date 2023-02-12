import { MapPinLine } from "phosphor-react";
import { Box } from "../../styles/global";
import { FormContent, FormHeader, FormWrapper, InputRow, MainContainer, Section } from "./style";
import { defaultTheme } from "../../styles/themes/default"

export function Checkout() {
    return (
        <MainContainer>
            <Section>
                <h2>Complete seu pedido</h2>

                <Box>
                    <FormWrapper>
                        <FormHeader>
                            <MapPinLine color={defaultTheme["yellow-500"]} size={24} />
                            <div>
                                <h3>Endereço de entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </FormHeader>

                        <FormContent>
                            <input id="cep" style={{width: "36%", maxWidth: 200}} type="text" />
                            <input id="rua" style={{gridArea: "street"}} type="text" />
                            <InputRow>
                                <input id="numero" style={{width: "32%", maxWidth: 200}} type="text" />
                                <input id="complemento" style={{gridArea: "complement"}} type="text" />
                            </InputRow>
                            <InputRow>
                                <input id="bairro" style={{width: "56%", maxWidth: 200}} type="text" />
                                <input id="cidade" style={{gridArea: "city"}} type="text" />
                                <input id="estado" style={{width: 60}} type="text" />
                            </InputRow>
                        </FormContent>
                    </FormWrapper>
                </Box>
                <Box style={{marginTop: 12}}>

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