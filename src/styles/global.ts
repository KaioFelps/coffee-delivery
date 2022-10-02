import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 1px ${({theme}) => theme["yellow-300"]};
}
`