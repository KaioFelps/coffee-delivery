import styled from "styled-components";

type IconBadgePropsType = {
    color: "purple" | "gold" | "burnt-yellow"
}

export const MainContainer = styled.main`
    width: calc(100% - 40px);
    max-width: 1120px;
    margin: 80px auto;

    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const SuccessHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
        font-family: "Nunito", sans-serif;
        font-weight: bolder;
        font-size: ${p => p.theme["font-size-32"]};
        color: ${p => p.theme["yellow-700"]};
    }

    h2 {
        font-size: ${p => p.theme["font-size-20"]};
        font-weight: normal;
        color: ${p => p.theme["base-subtitle"]};
    }
`

export const SessionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 102px;
    align-items: center;

    img {
        width: 100%;
        max-width: 492px;
    }

    @media (max-width: 760px) {
        flex-direction: column;
    }
`

export const SessionInformations = styled.article`
    position: relative;

    border: 1px solid tan;
    border-radius: 8px 36px;
    background-clip: padding-box;
    background: ${p => p.theme["white"]};

    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    &::after {
        content: "";
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;

        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    }
`

export const IconBadge = styled.span<IconBadgePropsType>`
    padding: 8px;
    border-radius: 999px;
    line-height: 0;
    color: ${p => p.theme["white"]};

    background: ${p =>
    p.color === "gold" ? p.theme["yellow-500"]
    : p.color === "burnt-yellow" ? p.theme["yellow-700"]
    : p.theme["purple-500"]};
`