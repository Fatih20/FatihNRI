import React, {useState} from "react";
import styled from "styled-components";

import Profile from "./profile";
import Content from "./content";

const Main = styled.div`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
            <Profile />
            <Content choiceDisplayed={choiceDisplayed} handleChoiceClick={handleChoiceClick}/>
        </Main>
    )
}