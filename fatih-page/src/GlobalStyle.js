import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #ffffff;
        --lightGrey: #eeeeee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontSuperBig: 1.5rem;
        --fontSuperBig: 1.2rem;
        --fontSuperBig: 1rem;
    }

    * {
        font-family: 'Inter';
        box-sizing: border-box;
        margin: 0px;

        li {
            list-style: none;
        }

        a {
	        text-decoration: none;
        }

        body {
            margin: 0;
            padding: 0;
        }

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`