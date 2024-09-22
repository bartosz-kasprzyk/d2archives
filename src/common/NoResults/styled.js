import styled from "styled-components";

export const NoResultsWrapper = styled.div`
    margin: auto 300px;
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
`;

export const NoResultsText = styled.p`
    font-size: 18px;
    color: #aaa;
    margin: 0;
`;

export const StyledImage = styled.img`
    width: 50px;
`;