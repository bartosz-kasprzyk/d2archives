import styled from "styled-components";

export const NoResultsWrapper = styled.div`
    margin: auto 20%;
`;

export const SpeechBubble = styled.div`
    width: 700px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background: #2E29296A;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin: 20px;

    &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 10px;
        border-width: 10px;
        border-style: solid;
        border-color: #2E29296A transparent transparent transparent;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.laptop}) { 
        width: 600px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        width: auto;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        padding: 15px;
    }
`;

export const NoResultsText = styled.p`
    font-size: 18px;
    color: #aaa;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        font-size: 13px;
    }
`;

export const StyledImage = styled.img`
    width: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 30px;
    }
`;