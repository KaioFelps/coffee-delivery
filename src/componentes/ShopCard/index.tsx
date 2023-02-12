import { Card, Counter, Infos, LabelsContainer, PriceLabel, PurchaseButton, PurchaseForm } from "./style";
import { Label } from "./Components/Label";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { Row } from "../../pages/Home/style";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import type { CoffeePropsType } from "../../contexts/CoffeeContext";

export function ShopCard({ description, image, labels, price, title }: CoffeePropsType) {
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
                            <button><Minus size={14} weight="fill" /></button>
                            <span>1</span>
                            <button><Plus size={14} weight="fill" /></button>
                        </Counter>

                        <PurchaseButton>
                            <ShoppingCartSimple size={22} weight="fill" />
                        </PurchaseButton>
                    </Row>
                </PurchaseForm>
            </>
        </Card>
    )
}