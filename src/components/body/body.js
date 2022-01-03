import React, {useState} from "react";
import styled from "styled-components";

import Profile from "./profile";
import MainContent from "./mainContent";

import options from "../../content/allContent";
import { VanillaButton } from "../../GlobalComponent";


const Main = styled.div`
    align-items: center;
    color: ${({theme}) => theme.regularText};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    overflow: auto;

    /* border: solid 1px white; */
`;



export default function Body (){
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
        <Main>
            <MainContent choiceDisplayed={choiceDisplayed} handleChoiceClick={handleChoiceClick} backToSelection={backToSelection}/>
        </Main>
    )
}