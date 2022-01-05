import React, {useState} from "react";
import styled from "styled-components";

import Profile from "./profile";
import MainContent from "./mainContent";

import options from "../../content/allContent";
import { VanillaButton } from "../../GlobalComponent";


const Main = styled.div`
    align-items: center;
    box-sizing: border-box;
    color: ${({theme}) => theme.regularText};
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: calc(100vh - 2.5rem);
    justify-content: center;
    width: 100%;
    /* overflow: auto; */

    /* border: solid 1px white; */
`;



export default function Body ({forwardedRef}){
    const[indexOfChoiceDisplayed, setIndexOfChoiceDisplayed] = useState(-1);

    function handleChoiceClick(newIndexOfChoiceDisplayed) {
        console.log(newIndexOfChoiceDisplayed)
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
        <Main ref={forwardedRef}>
            <MainContent indexOfChoiceDisplayed={indexOfChoiceDisplayed} handleChoiceClick={handleChoiceClick} backToSelection={backToSelection}/>
        </Main>
    )
}