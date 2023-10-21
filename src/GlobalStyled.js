import { createGlobalStyle } from "styled-components";
import { colorPrimario } from "./css/variables";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;

    }
    html{
        scroll-behavior:smooth;
    }
    body{
        background-color:${colorPrimario} ;
    }
`
export default GlobalStyle