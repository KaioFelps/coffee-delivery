import styled from "styled-components"

export const Card = styled.div`
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;

    max-width: 256px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: -40px;
        width: 120px;
        height: 120px;
    }
`

export const LabelsContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    margin-top: 12px;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-top: 16px;
    margin-bottom: 33px;

    h3 {
        color: ${props => props.theme["base-subtitle"]};
        text-align: center;
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
        text-align: center;
    }
`

export const PriceLabel = styled.label`
    font-family: "Baloo 2", sans-serif;
    color: ${props => props.theme["base-text"]};
    font-size: 1.4rem;
    font-weight: 800;

    &::before {
        content: "R$";
        font-family: "Roboto", sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        margin-right: 5px;
    }
`

export const PurchaseForm = styled.form`
    display: flex;
    justify-content: space-between;

    width: 100%;
`

export const Counter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    padding: 8.5px 8px;
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;

    span {
        cursor: default;
    }

    button {
        padding: 0;
        border: 0;
        background: transparent;
        line-height: 0;
        cursor: pointer;
        color: ${props => props.theme["purple-500"]};
    }
`

export const PurchaseButton = styled.button`
    border: 0;
    line-height: 0;
    padding: 8px;
    background: ${props => props.theme["purple-700"]};
    color: ${props => props.theme["white"]};
    border-radius: 6px;
    cursor: pointer;
    transition: .1s;

    &:hover {
        filter: brightness(1.2);
    }
`