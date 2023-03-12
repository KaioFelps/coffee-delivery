import * as PrimitiveRadio from "@radix-ui/react-radio-group"
import styled from "styled-components"

export const PaymentMethodsContainer = styled(PrimitiveRadio.Root)`
    flex: 1;
    display: flex;
    gap: 12px;
    margin-top: 32px;

    @media (max-width: 481px) {
        flex-direction: column;
    }
`

export const PaymentMethodRadio = styled(PrimitiveRadio.Item)`
    border: 0;
    padding: 16px;
    background: ${p => p.theme["base-button"]};

    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 6px;
    border: 1px solid ${p => p.theme["base-button"]};
    font-size: ${p => p.theme["font-size-12"]};
    color: ${p => p.theme["base-text"]};
    transition: all 75ms ease-in-out;

    &:hover {
        filter: brightness(0.95);
    }

    &:focus {
         outline: solid 4px ${p => p.theme["purple-300"]};
    }

    &[data-state="checked"] {
        background: ${p => p.theme["purple-300"]};
        border-color: ${p => p.theme["purple-500"]};
    }

    svg {
        color: ${p => p.theme["purple-500"]};
    }
`