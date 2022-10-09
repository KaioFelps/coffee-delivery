import styled from "styled-components"

export const Tag = styled.span`
    padding: 4px 8px;
    background: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};

    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-size: 0.625rem;
    font-weight: 700;

    border-radius: 100px;

    cursor: default;
`