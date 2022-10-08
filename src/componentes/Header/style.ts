import styled from "styled-components"

export const HeaderContainer = styled.header`
    padding: 2rem 0;
    background: ${props => props.theme["background"]};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 40px;
`

export const Logo = styled.img`
    width: 85px;
    height: 40px;
`

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

export const Location = styled.div`
    padding: 8px;
    border-radius: 6px;
    background: ${({theme}) => theme["purple-300"]};

    width: fit-content;
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;

    color: ${({theme}) => theme["purple-700"]};
    font-size: 0.875rem;

    cursor: default;

    svg {
        color: ${({theme}) => theme["purple-500"]};
    }
`

export const ShoppingBag = styled(Location).attrs({
    as: "a"
})`
    background: ${props => props.theme["yellow-300"]};

    svg {
        color: ${({theme}) => theme["yellow-700"]};
    }

    &:hover {
        filter: brightness(0.98);
    }

    &:active {
        filter: brightness(0.95);
    }
`

export const ShoppingBagAmount = styled.span`
    color: ${props => props.theme["white"]};
    background: ${props => props.theme["yellow-700"]};

    font-weight: 700;
    font-size: 0.75rem;
    padding: 3.5px 6px;
    line-height: 1;

    border-radius: 999px;

    position: absolute;
    top: -7px;
    right: -7px;
`