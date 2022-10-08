import LogoCoffee from "../../assets/Logo.svg"
import { Logo, Location, ShoppingBag, ShoppingBagAmount, Navbar, HeaderContainer } from "./style"
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header() {
    return (
        <HeaderContainer className="wrapper">
            <Logo src={LogoCoffee} alt="Copo de café descartável com um foguete dentro e um letreiro escrito Coffee Delivery ao lado" />
            <Navbar>
                <Location>
                    <MapPin size={22} weight="fill"/>
                    Porto Alegre, RS
                </Location>
                <ShoppingBag>
                    <ShoppingCart size={20} weight="fill" />
                    <ShoppingBagAmount>1</ShoppingBagAmount>
                </ShoppingBag>
            </Navbar>
        </HeaderContainer>
    )
}