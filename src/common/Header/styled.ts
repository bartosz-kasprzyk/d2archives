import styled from "styled-components";
import { Link } from "react-router-dom";
import flameImage from '../../images/Logo/flame.gif'
import cornerImage from '../../images/Ornaments/corner.png'

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LogoWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 20px;         
    grid-column: 1 / 3;
    margin: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        margin-bottom: 5px;
    }
`;

export const LogoIcon1 = styled.img`
    width: 300px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) { 
        width: 225px;
        margin-top: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 150px;
        margin-top: 40px;
    }
`;

export const LogoIcon2 = styled.img`
    width: 250px;
    padding: 20px;
    margin-top: -40px;
    background-image: url(${flameImage});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 50% 20px;
        display: inline-block;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) { 
        width: 200px;
        padding: 15px;
        margin-top: -32px;
        background-size: 50% 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 120px;
        padding: 10px;
        margin-top: -30px;
        background-size: 50% 10px;
    }
`;

export const StyledCorner = styled.div<{ $position?: string }>`
    position: absolute;
    top: 20px;
    ${({ $position = 'right' }) =>
        $position === 'left'
            ? 'left: 20px;'
            : 'right: 20px; transform: scaleX(-1);'}
    width: 150px;
    height: 150px;
    background: url(${cornerImage}) no-repeat center center;
    background-size: contain;
    z-index: 100;
    filter: brightness(0.3);

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 125px;
        height: 125px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 100px;
        height: 100px;
    }
`;