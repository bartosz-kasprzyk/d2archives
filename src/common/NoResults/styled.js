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
    background: #2E29296A; /* Background color for the bubble */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    margin: 20px;

    /* Create the triangle effect */
    &:after {
        content: '';
        position: absolute;
        top: 100%; /* Position below the bubble */
        left: 10px; /* Adjust to position closer to the image */
        border-width: 10px;
        border-style: solid;
        border-color: #2E29296A transparent transparent transparent; /* Triangle color matches the bubble */
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