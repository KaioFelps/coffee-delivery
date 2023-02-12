import styled from "styled-components";
import { Box } from "../../styles/global";

export const MainContainer = styled.main`
    width: calc(100% - 40px);
    max-width: 1120px;
    display: grid;
    grid-template-columns: 58% 1fr;
    gap: 32px;
    margin: 40px auto 100px auto;
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

export const FormHeader = styled.header`
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
            box-shadow: inset 0 0 0 1px ${props => props.theme["base-button"]};
            
            padding: 12px;
            background: ${props => props.theme["base-input"]};

            &::placeholder {
                color: ${props => props.theme["base-label"]};
                font-size: ${props => props.theme["font-size-14"]};
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