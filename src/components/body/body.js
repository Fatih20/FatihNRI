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
    const[choiceDisplayed, setChoiceDisplayed] = useState("selection");

    function handleChoiceClick(newChoiceDisplayed) {
        if (newChoiceDisplayed !== choiceDisplayed){
            setChoiceDisplayed(newChoiceDisplayed);
        } else {
            setChoiceDisplayed("selection");
        }
    }

    function backToSelection (){
        setChoiceDisplayed("selection");
    }

    

    return (
        <Main ref={forwardedRef}>
            <MainContent choiceDisplayed={choiceDisplayed} handleChoiceClick={handleChoiceClick} backToSelection={backToSelection}/>
        </Main>
    )
}