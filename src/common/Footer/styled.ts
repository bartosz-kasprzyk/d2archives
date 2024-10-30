import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    margin: 100px auto -30px;
    padding: 30px 0 0;
    border-top: 2px solid ${({ theme }) => theme.color.grey.light};
    color: ${({ theme }) => theme.color.grey.dark};
    font-size: 12px;
    font-family: 'AvQest', sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin: 80px auto 50px;
        padding-top: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 9px;
        margin: 60px auto -10px;
    }
`

export const StyledDrawingSignature = styled.img`
    width: 150px;
    height: 150px;
    opacity: 0.3;
    margin-top: 20px;
    transition: opacity 0.2s linear, transform 0.2s linear;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 120px;
        height: 120px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 100px;
        height: 100px;
        margin-top: 10px;
        margin-right: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        display: none;
    }

    &:hover {
        opacity: 0.5;
        transform: scale(1.01);
    }
`;

export const FooterText = styled.div`
    justify-content: center;
    text-align: center;
`

export const Sup = styled.sup`
    font-size: 9px;
    vertical-align: super;
    top: 3px;
`;

export const Credits = styled(FooterText)`
    margin-top: 5px;
    
    ul {
        list-style-type: none;
        padding: 0;
        margin-top: 0; 
    }

    li {
        margin: 2px 0;
    }

    a {
        color: ${({ theme }) => theme.color.unique};
        text-decoration: none;
        transition: filter 0.2s linear;
    }

    a:hover {
        filter: brightness(1.5);
    }
`;

export const FooterTitle = styled.h4`
    margin-bottom: 0;
`



