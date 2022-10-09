import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["yellow-700"]};
}

body {
    background: ${props => props.theme["background"]};
}

body, input-security, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme["font-size-16"]};
}

input, a, button, strong {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
}

.wrapper {
    width: calc(100% - 20px);
    max-width: 1120px;
    margin: auto;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Baloo 2", sans-serif;
}

h1 { font-size: 3rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.25rem; }
h4 { font-size: 1.125rem; }
h5 { font-size: 1rem; }
h6 { font-size: 0.875rem; }
`