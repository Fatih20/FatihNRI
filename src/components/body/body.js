import React, {useState} from "react";
import styled from "styled-components";

import Profile from "./profile";
import Content from "./content";

const Main = styled.div`
    background-color: #f9c440;
    flex-grow: 1;
    height: 30vh;
    width: 100%;
`;

export default function Body (){
    const[choiceDisplayed, setChoiceDisplayed] = useState("selection");

    function handleChoiceClick(newChoiceDisplayed) {
        if (newChoiceDisplayed !== choiceDisplayed){
            setChoiceDisplayed(newChoiceDisplayed);
        }
    }

    function backToSelection (){
        setChoiceDisplayed("selection");
    }

    return (
        <Main>

        </Main>
    )
}