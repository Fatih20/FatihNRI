import React from "react";
import styled from "styled-components";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";

import Event from "./event";

const Main = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

const Title = styled.h2`
    font-size: 36px;
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;
`;


const Option = styled(VanillaButton)`
    background-color: #333333;
    border-radius: 5px;
    border: solid 1px black;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    color: white;
    padding: 15px;
    transition: color 0s, background-color 0s, box-shadow 0s;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    &:hover {
        background-color: #fafafa;
        box-shadow: 0 3px 5px rgba(255, 255, 255, 0.35);
        color: #333333;
    }
`;

export default function Content ({choiceDisplayed, handleChoiceClick}){

    function optionMaker({name}) {
        return (
            <Option onClick={() => handleChoiceClick(name)} key={name} chosen={choiceDisplayed === name ? true : false}>
                <h2>{name}</h2>
            </Option>
        )
    }

    if (choiceDisplayed === "selection"){
        return (
            <Main>
                <Title>See all the things I've done</Title>
                <OptionContainer>
                    {options.map((option) => optionMaker(option))}
                </OptionContainer>
            </Main>
        )
    } else {
        return (
            <Main>
                {options.filter(option => option["name"] === choiceDisplayed)[0]["content"].map((event) => <Event event={event}/>)}
            </Main>
        )
    }
}