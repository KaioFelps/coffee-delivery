import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./router"
import { BrowserRouter } from "react-router-dom"
import { CoffeeContextProvider } from "./contexts/CoffeeContext"

function App() {
  return (
    <CoffeeContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </CoffeeContextProvider>
  )
}

export default App
