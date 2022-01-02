import React, {useState} from "react";
import styled from "styled-components";

import Profile from "./profile";
import Content from "./content";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";


const Main = styled.div`
    align-items: center;
    /* background-color: #f9c440; */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
            <Content choiceDisplayed={choiceDisplayed} handleChoiceClick={handleChoiceClick}/>
        </Main>
    )
}