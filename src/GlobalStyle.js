import { createGlobalStyle } from "styled-components";
import background from "./notes.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        padding: 15px;
        line-height: 1.6;
        background-image: url("${background}");
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (max-width: 1220px) {
        body {
            background-size: 1220px auto;
        }
    }
`;
