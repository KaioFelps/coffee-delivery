import { Card, Counter, Infos, LabelsContainer, PriceLabel, PurchaseButton, PurchaseForm } from "./style";
import { Label } from "./Components/Label";

// cafés
import Americano from "../../assets/Type=Americano.png"
import Arabe from "../../assets/Type=Árabe.png"
import CafeComLeite from "../../assets/Type=Café Com Leite.png"
import CafeGelado from "../../assets/Type=Café Gelado.png"
import Capuccino from "../../assets/Type=Capuccino.png"
import ChocolateQuente from "../../assets/Type=Chocolate Quente.png"
import Cubano from "../../assets/Type=Cubano.png"
import ExpressoCremoso from "../../assets/Type=Expresso Cremoso.png"
import Expresso from "../../assets/Type=Expresso.png"
import Havaiano from "../../assets/Type=Havaiano.png"
import Irlandes from "../../assets/Type=Irlandês.png"
import Latte from "../../assets/Type=Latte.png"
import Macchiato from "../../assets/Type=Macchiato.png"
import Mocaccino from "../../assets/Type=Mochaccino.png"
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { Row } from "../../pages/Home/style";

// CONSTS

const CoffeeType = {
    american: {
        image: Americano,
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.99,
    },
    arabic: {
        image: Arabe,
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.99,
    },
    coffeeWithMilk: {
        image: CafeComLeite,
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.99,
    },
    iceCoffee: {
        image: CafeGelado,
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.99,
    },
    cappuccino: {
        image: Capuccino,
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.99,
    },
    hotChocolate: {
        image: ChocolateQuente,
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.99,
    },
    cuban: {
        image: Cubano,
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.99,
    },
    creamyEspresso: {
        image: ExpressoCremoso,
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.99,
    },
    espresso: {
        image: Expresso,
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.99,
    },
    hawaiian: {
        image: Havaiano,
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.99,
    },
    irish: {
        image: Irlandes,
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.99,
    },
    latte: {
        image: Latte,
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.99,
    },
    macchiato: {
        image: Macchiato,
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.99,
    },
    mocaccino: {
        image: Mocaccino,
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.99,
    },
} as const

// TYPES

type ShopCardProps = {
    coffeeType: keyof typeof CoffeeType;
    labels: string[];
}

export function ShopCard(props: ShopCardProps) {
    return (
        <Card>
            <>
                <img src={CoffeeType[props.coffeeType].image} alt="" />
                <LabelsContainer>
                    {props.labels.map(label => {
                        return <Label content={label} />
                    })}
                </LabelsContainer>

                <Infos>
                    <h3>{CoffeeType[props.coffeeType].title}</h3>
                    <p>{CoffeeType[props.coffeeType].description}</p>
                </Infos>

                <PurchaseForm>
                    <PriceLabel>
                        {CoffeeType[props.coffeeType].price}
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