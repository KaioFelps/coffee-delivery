import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./router"
import { BrowserRouter } from "react-router-dom"
import { CoffeeContextProvider } from "./contexts/CoffeeContext"
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CoffeeContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router/>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            limit={3}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </CoffeeContextProvider>
  )
}

export default App
