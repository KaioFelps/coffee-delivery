import { Card, Counter, Infos, LabelsContainer, PriceLabel, PurchaseButton, PurchaseForm } from "./style";
import { Label } from "./Components/Label";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { Row } from "../../pages/Home/style";
import { CoffeeContext, CoffeePropsType } from "../../contexts/CoffeeContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export function ShopCard({ description, image, labels, price, title }: CoffeePropsType) {
    const [ coffeeQuantity, setCoffeeQuantity ] = useState(1)
    const { addCoffeeToCart, coffeesList } = useContext(CoffeeContext)

    function handleIncreaseCoffeeQuantity() {
        if (coffeeQuantity >= 12) {
            return;
        }
        setCoffeeQuantity(prevState => ++prevState)
    }
    
    function handleDecreaseCoffeeQuantity() {
        if(coffeeQuantity <= 1) {
            return;
        }
        setCoffeeQuantity(prevState => --prevState)
    }

    function handleAddToCart() {
        try {
            addCoffeeToCart({
                image,
                price,
                title,
                quantity: coffeeQuantity,
            })
            toast("Adicionado com sucesso!", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "success"
            })
        }
        catch(error) {
            console.log(error)
            toast("Algo deu errado =(", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "error"
            })
        }
    }

    return (
        <Card>
            <>
                <img src={image} alt="" />
                <LabelsContainer>
                    {labels.map(label => {
                        return <Label key={label} content={label} />
                    })}
                </LabelsContainer>

                <Infos>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Infos>

                <PurchaseForm>
                    <PriceLabel>
                        {price}
                    </PriceLabel>

                    <Row gap="8px">
                        <Counter>
                            <button type="button" onClick={ handleDecreaseCoffeeQuantity } ><Minus size={14} weight="fill" /></button>
                            <span>{coffeeQuantity}</span>
                            <button type="button" onClick={ handleIncreaseCoffeeQuantity } ><Plus size={14} weight="fill" /></button>
                        </Counter>

                        <PurchaseButton type="button" onClick={ handleAddToCart }>
                            <ShoppingCartSimple size={22} weight="fill" />
                        </PurchaseButton>
                    </Row>
                </PurchaseForm>
            </>
        </Card>
    )
}