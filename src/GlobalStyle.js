import { createGlobalStyle } from "styled-components";
import './fonts/AvQest/AvQest.css';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 15px;
        line-height: 1.5;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        margin: auto;
        background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(31, 18, 0, 1) 55%, rgba(0, 0, 0, 1) 100%);
        color: #DDDDDD;
        font-family: "Ubuntu", sans-serif;
    }
`;