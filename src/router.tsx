import { Routes, Route } from "react-router"
import { DefaultLayout } from "./layouts/default"
import { Home } from "./pages/Home"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    )
}