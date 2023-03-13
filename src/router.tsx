import { Routes, Route } from "react-router"
import { DefaultLayout } from "./layouts/default"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"
import { Success } from "./pages/Success"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="checkout" element={<Checkout />} ></Route>
                <Route path="success" element={<Success />} ></Route>
            </Route>
        </Routes>
    )
}