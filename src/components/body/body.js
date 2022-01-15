import React, {useState} from "react";
import styled from "styled-components";

// Components
import MainContent from "./mainContent";


// const Main = styled.div`
//     align-items: center;
//     box-sizing: border-box;
//     color: ${({theme}) => theme.regularText};
//     display: flex;
//     flex-direction: column;
//     font-size: 1em;
//     height: calc(100vh - 2.5em);
//     justify-content: center;
//     width: 100%;

//     @media (max-width: 601px){
//         height: calc(100vh - 3em);
//     }

//     /* border: solid 1px white; */
// `;

export default function Body ({forwardedRef}){
    const[indexOfChoiceDisplayed, setIndexOfChoiceDisplayed] = useState(-1);

    function handleChoiceClick(newIndexOfChoiceDisplayed) {
        if (newIndexOfChoiceDisplayed !== indexOfChoiceDisplayed){
            setIndexOfChoiceDisplayed(newIndexOfChoiceDisplayed);
        } else {
            setIndexOfChoiceDisplayed(-1);
        }
    }

    function backToSelection (){
        setIndexOfChoiceDisplayed(-1);
    }

    

    return (
        <div className="items-center box-border flex flex-col h-[calc(100vh-3em)] justify-center w-full sm:h-[calc(100vh-3.25em)]" ref={forwardedRef}>
            <MainContent indexOfChoiceDisplayed={indexOfChoiceDisplayed} handleChoiceClick={handleChoiceClick} backToSelection={backToSelection}/>
        </div>
    )
}