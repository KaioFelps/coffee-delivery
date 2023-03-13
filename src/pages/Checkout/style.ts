import styled from "styled-components";
import { Box } from "../../styles/global";

export const MainContainer = styled.main`
    width: calc(100% - 40px);
    max-width: 1120px;
    display: grid;
    grid-template-columns: 58% 1fr;
    gap: 32px;
    margin: 40px auto 100px auto;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: ${p => p.theme["font-size-18"]};
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
        margin-bottom: 16px;
    }
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const BoxHeader = styled.header`
    flex: 1;
    display: flex;
    gap: 8px;

    div {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    h3 {
        color: ${props => props.theme["base-subtitle"]};
        font-weight: 400;
        font-size: ${props => props.theme["font-size-16"]};
        font-family: "Roboto", sans-serif;
    }

    p {
        color: ${props => props.theme["base-text"]};
        font-size: ${props => props.theme["font-size-14"]};
    }
`

export const FormContent = styled.form`
    flex: 1;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
        width: 100%;
        position: relative;

        &[type=text] {
            border-radius: 4px;
            border: 0;
            box-shadow: inset 0 0 0 1px ${props => props.theme["base-label"]};
            
            padding: 12px;
            background: ${props => props.theme["base-input"]};
            
            &::placeholder {
                color: ${props => props.theme["base-label"]};
                font-size: ${props => props.theme["font-size-14"]};
            }
            
            &:focus {
                box-shadow: inset 0 0 0 2px ${props => props.theme["yellow-500"]};
            }
        }
    }
    #complemento::after {
        content: "Opcional";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: ${props => props.theme["font-size-12"]};
        color: ${props => props.theme["base-label"]};
    }
`

export const InputRow = styled.div`
    flex: 1;
    max-width: 100%;
    display: flex;
    gap: 12px;
`

export const InCartCoffeesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const CoffeeDivisor = styled.div`
    width: 100%;
    height: 1px;
    background: ${p => p.theme["base-button"]};
`

export const CoffeeCard = styled.article`
    padding: 8px 4px;
    display: flex;
    align-items: flex-start;
    gap: 12px;

    & > span {
        font-weight: bold;
        color: ${p => p.theme["base-text"]};
    }
`

export const CoffeeInformationContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    h3 {
        font-size: ${p => p.theme["font-size-16"]};
        color: ${p => p.theme["base-subtitle"]}
    }

    @media (max-width: 320px) {
        flex-direction: column;
    }
`

export const CoffeeActionBar = styled.div`
    width: fit-content;
    display: flex;
    gap: 8px;

    @media (max-width: 481px) {
        flex-direction: column;
    }
`

export const RemoveFromCartButton = styled.button`
    border: 0;
    border-radius: 6px;
    padding: 0px 8px;
    min-height: 40px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    font-size: ${p => p.theme["font-size-12"]};
    color: ${p => p.theme["base-text"]};

    background: ${p => p.theme["base-button"]};
    transition: all 75ms ease-in-out;
    text-transform: uppercase;

    &:hover {
        background: tomato;
        color: ${p => p.theme["white"]};

        svg {
            color: ${p => p.theme["white"]};
        }
    }

    &:focus {
        outline: 4px solid tomato;
    }
    
    svg {
        color: tomato;
        transition: all 75ms ease-in-out;
    }
`

export const SummaryContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 24px 0;
    color: ${p => p.theme["base-text"]};

    label {
        font-size: ${p => p.theme["font-size-14"]};
    }

    span {
        font-size: ${p => p.theme["font-size-16"]};
    }

    strong span, strong label {
        font-size: ${p => p.theme["font-size-20"]};
        color: ${p => p.theme["base-subtitle"]};
    }
`

export const ConfirmButton = styled.a`
    border: 1px solid ${p => p.theme["yellow-700"]};
    width: 100%;

    padding: 12px 8px;
    border-radius: 6px;
    background: ${p => p.theme["yellow-500"]};
    color: ${p => p.theme["white"]};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${p => p.theme["font-size-18"]};
    font-weight: bold;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 75ms ease-in-out;

    &:hover {
        filter: brightness(0.95);
    }

    &:active {
        filter: brightness(1);
        border-color: ${p => p.theme["yellow-500"]};
        background: ${p => p.theme["yellow-700"]};
    }
`