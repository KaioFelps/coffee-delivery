// cafés
import Americano from "../assets/Type=Americano.png"
import Arabe from "../assets/Type=Árabe.png"
import CafeComLeite from "../assets/Type=Café Com Leite.png"
import CafeGelado from "../assets/Type=Café Gelado.png"
import Capuccino from "../assets/Type=Capuccino.png"
import ChocolateQuente from "../assets/Type=Chocolate Quente.png"
import Cubano from "../assets/Type=Cubano.png"
import ExpressoCremoso from "../assets/Type=Expresso Cremoso.png"
import Expresso from "../assets/Type=Expresso.png"
import Havaiano from "../assets/Type=Havaiano.png"
import Irlandes from "../assets/Type=Irlandês.png"
import Latte from "../assets/Type=Latte.png"
import Macchiato from "../assets/Type=Macchiato.png"
import Mocaccino from "../assets/Type=Mochaccino.png"
import { createContext, ReactNode } from "react"

export type CoffeePropsType = {
    image: string,
    title: string,
    description: string,
    labels: string[],
    price: number,
}

type CoffeesDataPropsType = CoffeePropsType[]

type CoffeeContextPropsType = {
    CoffeesData: CoffeesDataPropsType,
}

export const CoffeeContext = createContext({} as CoffeeContextPropsType)

export function CoffeeContextProvider({ children }: {children :ReactNode}) {
    const CoffeesData: CoffeesDataPropsType = [
        {
            image: Americano,
            title: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            labels: ["tradicional"],
            price: 9.99,
        },
        {
            image: Arabe,
            title: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            labels: ["especial"],
            price: 9.99,
        },
        {
            image: CafeComLeite,
            title: "Café com Leite",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            labels: ["tradicional", "com leite"],
            price: 9.99,
        },
        {
            image: CafeGelado,
            title: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            labels: ["tradicional", "gelado"],
            price: 9.99,
        },
        {
            image: Capuccino,
            title: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            labels: ["tradicional", "com leite"],
            price: 9.99,
        },
        {
            image: ChocolateQuente,
            title: "Chocolate Quente",
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            labels: ["especial", "com leite"],
            price: 9.99,
        },
        {
            image: Cubano,
            title: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            labels: ["especial", "alcoólico", "gelado"],
            price: 9.99,
        },
        {
            image: ExpressoCremoso,
            title: "Expresso Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            labels: ["tradicional"],
            price: 9.99,
        },
        {
            image: Expresso,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            labels: ["tradicional"],
            price: 9.99,
        },
        {
            image: Havaiano,
            title: "Havaiano",
            description: "Bebida adocicada preparada com café e leite de coco",
            labels: ["especial"],
            price: 9.99,
        },
        {
            image: Irlandes,
            title: "Irlandês",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            labels: ["especial", "alcoólico"],
            price: 9.99,
        },
        {
            image: Latte,
            title: "Latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            labels: ["tradicional", "com leite"],
            price: 9.99,
        },
        {
            image: Macchiato,
            title: "Macchiato",
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            labels: ["tradicional", "com leite"],
            price: 9.99,
        },
        {
            image: Mocaccino,
            title: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            labels: ["tradicional", "com leite"],
            price: 9.99,
        }
    ]

    const contextValue = {
        CoffeesData,
    }

    return (
        <CoffeeContext.Provider value={contextValue}>
            { children }
        </CoffeeContext.Provider>
    )
}