import React, {useState} from "react";
import styled from "styled-components";

import Profile from "./profile";
import Content from "./content";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";


const Main = styled.div`
    align-items: center;
    background-color: #f9c440;
    color: white;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Title = styled.h2`
    
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;
`;

const Option = styled(VanillaButton)`
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: ${({chosen}) => chosen ? "white" : "black"};
    padding: 15px;
    transition: color 0s, background-color 0s, box-shadow 0s;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    &:hover {
        /* box-shadow: 0 3px 5px rgba(255, 255, 255, 0.35); */
        color: white;
    }
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

    function optionMaker({name}) {
        return (
            <Option onClick={() => handleChoiceClick(name)} key={name} chosen={choiceDisplayed === name ? true : false}>
                <h2>{name}</h2>
            </Option>
        )
    }

    return (
        <Main>
            <Title>See all the things I've done</Title>
            <OptionContainer>
                {options.map((option) => optionMaker(option))}
            </OptionContainer>
            <Content choiceDisplayed={choiceDisplayed}/>
        </Main>
    )
}