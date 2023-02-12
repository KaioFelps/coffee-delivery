import LogoCoffee from "../../assets/Logo.svg"
import { Logo, Location, ShoppingBag, ShoppingBagAmount, Navbar, HeaderContainer } from "./style"
import { MapPin, ShoppingCart } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "../../contexts/CoffeeContext"

export function Header() {
    const { getTotalCoffeeQuantity } = useContext(CoffeeContext)
    const [ coffeesQuantity, setCoffeesQuantity ] = useState(0)

    useEffect(() => {
        setCoffeesQuantity(getTotalCoffeeQuantity())
    }, [ getTotalCoffeeQuantity ])

    return (
        <HeaderContainer className="wrapper">
            <Logo src={LogoCoffee} alt="Copo de café descartável com um foguete dentro e um letreiro escrito Coffee Delivery ao lado" />
            <Navbar>
                <Location>
                    <MapPin size={22} weight="fill"/>
                    Porto Alegre, RS
                </Location>
                <ShoppingBag to="/checkout">
                    <ShoppingCart size={20} weight="fill" />
                    <ShoppingBagAmount>{coffeesQuantity < 100 ? coffeesQuantity : "99+"}</ShoppingBagAmount>
                </ShoppingBag>
            </Navbar>
        </HeaderContainer>
    )
}