import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 1120px;
    width: calc(100% - 20px);
    margin: auto;
    background: ${props => props.theme["background"]};
    
    display: flex;
    flex-direction: column;
`;