import React from "react";
import styled from "styled-components";

import options from "../../content/options";
import { VanillaButton } from "../../GlobalComponent";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Option = styled(VanillaButton)`
    background-color: #333333;
    color: white;
    padding: 15px;
    border-radius: 5px;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }
`;

const Event = styled.div`
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 400px;

`;

export default function Content ({choiceDisplayed, handleChoiceClick}){

    function cardMaker ({title, subtitle, timeStart, timeEnd, summary, relevantLink }) {
        return (
            <Event>
                <p>{title}</p>
                <p>{subtitle}</p>
                <p>{timeStart}</p>
                <p>{timeEnd}</p>
                <p>{summary}</p>
            </Event>
        )
    }

    function optionMaker({name}) {
        return (
            <Option onClick={() => handleChoiceClick(name)} key={name}>
                <h2>{name}</h2>
            </Option>
        )
    }

    if (choiceDisplayed === "selection"){
        return (
            <Main>
                {options.map((option) => optionMaker(option))}
            </Main>
        )
    } else {
        return (
            <Main>
                {options.filter(option => option["name"] === choiceDisplayed)[0]["content"].map((event) => cardMaker(event))}
            </Main>
        )
    }
}