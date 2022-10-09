import styled from "styled-components";

// SETTINGS

const RoundIconsColors = {
    bronze: "#C47F17",
    gold: "#DBAC2C",
    gray: "#574F4D",
    purple: "#8047F8",
} as const

const AlignItemsPattern = {
    stretch: "stretch",
    start: "flex-start",
    center: "center",
    end: "flex-end",
} as const

const JustifyContentPattern = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    around: "space-around",
    between: "space-between",
    evenly: "space-evenly",
} as const


// TYPES

type RoundIconProps = {
    color: keyof typeof RoundIconsColors;
}

type FlexItens = {
    gap?: string;
    columnGap?: string;
    rowGap?: string;
    align?: keyof typeof AlignItemsPattern;
    justify?: keyof typeof JustifyContentPattern;
    break?: boolean;
    width?: string;
    height?: string;
    responsiveWidth?: string;
    responsiveHeight?: string;
}

type GridBase = {
    gap?: string;
    columnGap?: string;
    rowGap?: string;
    templateColumn?: [number, string];
    templateRow?: [number, string];
    templateArea?: string;
    break?: boolean;
    width?: string;
    height?: string;

    responsiveWidth?: string;
    responsiveHeight?: string;
}

type BackgroundImage = {
    Src: string;
}


// COMPONENTS

export const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;

export const Row = styled.div<FlexItens>`
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => !props.break ? null : "wrap"};

    width: ${props => !props.width ? null : props.width};
    height: ${props => !props.height ? null : props.height};

    align-items: ${props => !props.align ? null : AlignItemsPattern[props.align]};
    justify-content: ${props => !props.justify ? null : JustifyContentPattern[props.justify]};
    gap: ${props => !props.gap ? null : props.gap};
    column-gap: ${props => !props.columnGap ? null : props.columnGap};
    row-gap: ${props => !props.rowGap ? null : props.rowGap};
`

export const Col = styled.div<FlexItens>`
    display: flex;
    flex-direction: column;
    flex-wrap: ${props => !props.break ? null : "wrap"};


    width: ${props => !props.width ? null : props.width};
    height: ${props => !props.height ? null : props.height};

    align-items: ${props => !props.align ? null : AlignItemsPattern[props.align]};
    justify-content: ${props => !props.justify ? null : JustifyContentPattern[props.justify]};
    gap: ${props => !props.gap ? null : props.gap};
    column-gap: ${props => !props.columnGap ? null : props.columnGap};
    row-gap: ${props => !props.rowGap ? null : props.rowGap};


    & .titles h1{
        font-family: "Baloo 2", sans-serif;
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.2;

        color: ${props => props.theme["base-title"]};
    }

    & .titles p {
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]}
    }

    @media (max-width: 1119px) {
        width: ${props => !!props.responsiveWidth ? props.responsiveWidth : null};
        height: ${props => !!props.responsiveHeight ? props.responsiveHeight : null};
    }

    @media (max-width: 1119px) {
        .titles h1 {
            font-size: 2rem;
        }

        .titles p {
            font-size: 1rem;
        }
    }
`

export const Grid = styled.div<GridBase>`
    width: ${props => !props.width ? null : props.width};
    height: ${props => !props.height ? null : props.height};

    display: grid;
    gap: ${props => !props.gap ? null : props.gap};
    column-gap: ${props => !props.columnGap ? null : props.columnGap};
    row-gap: ${props => !props.rowGap ? null : props.rowGap};
    grid-template-columns: ${props => !props.templateColumn ? null : `repeat(${props.templateColumn[0]}, ${props.templateColumn[1]})` };
    grid-template-rows: ${props => !props.templateRow ? null : `repeat(${props.templateRow[0]}, ${props.templateRow[1]})` };
    grid-template-areas: ${props => !props.templateArea ? null : props.templateArea};

    @media (max-width: 1119px) {
        width: ${props => !!props.responsiveWidth ? props.responsiveWidth : null};
        height: ${props => !!props.responsiveHeight ? props.responsiveHeight : null};
    }
`

export const Grid_2x2 = styled.div<GridBase>`
    width: ${props => !props.width ? null : props.width};
    height: ${props => !props.height ? null : props.height};

    display: grid;
    grid-template-rows: max-content max-content;
    grid-template-columns: max-content max-content;

    gap: ${props => !props.gap ? null : props.gap};
    column-gap: ${props => !props.columnGap ? null : props.columnGap};
    row-gap: ${props => !props.rowGap ? null : props.rowGap};
`


// USING COMPONENTS

export const RoundIcon = styled.div<RoundIconProps>`
    background: ${props => RoundIconsColors[props.color]};
    min-width: 32px;
    min-height: 32px;
    border-radius: 999px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    svg {
        color: ${props => props.theme["white"]};
    }
`

export const AdvantagesText = styled.p`
    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
`

export const BenefitsGrid = styled(Grid_2x2)`
    @media (max-width: 1119px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`

export const HeaderGrid = styled(Grid)`
    padding: 52px 0 92px 0;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;

        margin: auto;
        justify-items: center;

        & .titles {
            text-align: center;
        }

        & .titles h1 {
            font-size: 3rem;
        }

        & .titles p {
            display: none;
        }

        & ${BenefitsGrid} {
            margin-left: 30px;
            
            & ${AdvantagesText} {
                font-size: 1.25rem;
            }
        }
    }

    @media (max-width: 520px) {
        & img {
            max-width: 95%;
        }
    }
`

export const HeaderColorBG = styled.div<BackgroundImage>`
    position: absolute;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 544px;
    background: url(${props => props.Src});
    pointer-events: none;
`

export const MenuContainer = styled(Row)`
    flex-wrap: wrap;
`