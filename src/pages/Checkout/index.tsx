import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { Box } from "../../styles/global";
import { FormContent, BoxHeader, FormWrapper, InputRow, MainContainer, Section, CoffeeCard, CoffeeInformationContainer, RemoveFromCartButton, CoffeeActionBar, InCartCoffeesList, CoffeeDivisor, SummaryContainer, ConfirmButton } from "./style";
import { defaultTheme } from "../../styles/themes/default"
import { PaymentMethodRadio, PaymentMethodsContainer } from "./radioStyles";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { Counter } from "../../componentes/ShopCard/style";
import {Navigate} from "react-router-dom"

export function Checkout() {
    const { coffeesList, setCoffeeQuantity, removeCoffeeFromCart } = useContext(CoffeeContext)

    function handleIncreaseCoffeeQuantity(title: string, quantity: number) {
        const newQuantity = quantity + 1 > 12 ? 12 : quantity + 1
        
        setCoffeeQuantity(title, newQuantity)
    }
    
    function handleDecreaseCoffeeQuantity(title: string, quantity: number) {
        if (quantity - 1 <= 0) {
            removeCoffeeFromCart(title)
            return;
        }
        
        setCoffeeQuantity(title, quantity - 1)
    }
    
    function getSumOfPrices() {
        const totalPrice = coffeesList.reduce((acc, coffee) => {
            return acc + (coffee.price * coffee.quantity)
        }, 0)
        
        return totalPrice
    }
    
    function formatPriceToBRL(price: number) {
        return price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        })
    }
    
    const totalPrice = getSumOfPrices()
    const deliveryTax = 3.50

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
                    <InCartCoffeesList>
                        {coffeesList.map(coffee => (
                            <>
                                <CoffeeCard>
                                    <CoffeeInformationContainer>
                                        <img src={coffee.image} alt={coffee.title} width={64} height={64} />
                                        <div>
                                            <p>{coffee.title}</p>
                                            <CoffeeActionBar>
                                                <Counter>
                                                    <button type="button" onClick={() => handleDecreaseCoffeeQuantity(coffee.title, coffee.quantity)}><Minus size={14} weight="fill" /></button>
                                                    <span>{coffee.quantity}</span>
                                                    <button type="button" onClick={() => handleIncreaseCoffeeQuantity(coffee.title, coffee.quantity)}><Plus size={14} weight="fill" /></button>
                                                </Counter>

                                                <RemoveFromCartButton
                                                    type="button"
                                                    title="Remover café do carrinho"
                                                    onClick={() => removeCoffeeFromCart(coffee.title)}
                                                >
                                                    <Trash size={16} weight="light" />
                                                    remover
                                                </RemoveFromCartButton>
                                            </CoffeeActionBar>
                                        </div>
                                    </CoffeeInformationContainer>

                                    <span>${coffee.price}</span>
                                </CoffeeCard>

                                <CoffeeDivisor />
                            </>
                        ))}
                    </InCartCoffeesList>

                    <SummaryContainer>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <label>Total de itens</label>
                            <span>{formatPriceToBRL(totalPrice)}</span>
                        </div>

                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <label>Entrega</label>
                            <span>{formatPriceToBRL(deliveryTax)}</span>
                        </div>

                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <strong><label>Total de itens</label></strong>
                            <strong><span>{formatPriceToBRL(totalPrice + deliveryTax)}</span></strong>
                        </div>
                    </SummaryContainer>

                    <ConfirmButton
                        href="/success"
                        title="Confirmar pedido"
                    >
                        Confirmar pedido
                    </ConfirmButton>
                </Box>
            </Section>
        </MainContainer>
    )
}