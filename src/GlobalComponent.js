import styled, { createGlobalStyle } from "styled-components";

export const GlobalTransition = createGlobalStyle`
    
    * {
        transition: color 0.2s, background-color 0.2s;
    }
`;

// export const VanillaButton = styled.button`
//     display: inline-block;
//     border: none;
//     cursor: pointer;
//     font-family: 'Inter', sans-serif;
//     margin: 0;
//     text-decoration: none;
//     text-align: center;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     padding: 0;
// `;

export function VanillaButton({children}) {
    return <button className="inline-block border-none cursor-pointer m-0 text-center no-underline p-0 font-basic">{children}</button>
}