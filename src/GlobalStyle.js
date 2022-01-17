import { createGlobalStyle } from "styled-components";

//const means you can change the properties of the object but not the object itself
//components start with capital letter for the 1st letter of each word
//anything enclosed in double back ticks is called a template literal
//css variable name has a double dash prefix (--) and is camel cased
//you can nest styles eg a h1 tag inside body as shown below
//grab a variable you had defines earlier using var() eg var(--white) below
export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkgrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1 rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }

`;