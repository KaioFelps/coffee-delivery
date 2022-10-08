import { Outlet } from "react-router"
import { Header } from "../../componentes/Header"
import { LayoutContainer } from "./style"

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    )
}